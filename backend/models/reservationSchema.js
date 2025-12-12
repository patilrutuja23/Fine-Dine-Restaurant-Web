import mongoose from "mongoose";
import validator from "validator";


const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength:[3,"First Name must be at least 3 characters long"],
        maxLength:[30,"First Name cannot exceed 30 characters"],
    },
    lastName: {
        type: String,
        required: true,
        minLength:[3,"Last Name Must be at least 3 characters long"],
        maxLength:[30,"Last Name cannot exceed 30 characters"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please enter a valid email address"],
    },
    phoneNumber: {
        type: String,
        required: true,
        minLength:[10,"Phone Number must be at least 10 digits long"],
        maxLength:[10,"Phone Number cannot exceed 10 digits"],
    },

    time : {
        type: String,
        required: true,
    },

    date : {
        type: String,
        required: true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);