import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from "./database/dbConnection.js"
import { errorMiddleware } from './error/error.js';
import reservationRoute from './routes/reservationRoute.js';



const app = express();
dotenv.config({ path: './config/config.env' });


app.use(cors(
    { origin:'*',
        methods:['POST', 'GET', 'OPTIONS'],
        credentials:false
    }
))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Catch malformed JSON errors and return a clear 400 response
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ success: false, message: 'Invalid JSON in request body' });
    }
    next(err);
});

// Debugging middleware to log request headers/body for troubleshooting
app.use((req, res, next) => {
    // Comment out or remove these logs in production
    console.log('>>> Incoming request:', req.method, req.path);
    console.log('Headers:', req.headers['content-type']);
    console.log('Body:', req.body);
    next();
});
app.use('/api/v1/reservations', reservationRoute);



dbConnection();

app.use(errorMiddleware);

export default app;