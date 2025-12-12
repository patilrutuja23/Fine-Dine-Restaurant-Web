import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";


export const sendReservation = async (req, res, next) => {
    if (!req.body) return next(new ErrorHandler('Request body missing or not parsed. Ensure Content-Type: application/json and valid JSON body.', 400));
    const { firstName, lastName, email, phoneNumber, date, time } = req.body;
    if(!firstName || !lastName || !email || !phoneNumber || !date || !time) {
        return next(new ErrorHandler("Please fill all the fields!", 400));
    } 
    try{
        await Reservation.create({firstName, lastName, email, phoneNumber, date, time});
        res.status(200).json({
            success: true,
            message: "Reservation successful",            
        });
    }
    catch(error){
        if(error.name === "ValidationError"){
            const validationErrors = Object.values(error.errors).map((err) => err.message);
            return next(new ErrorHandler(validationErrors.join(", "), 400));
        }
        return next(error);
    }
};

