import mongoose from "mongoose";

const FlightSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    departureAirport: {
        type: String,
        required: true
    },
    arrivalAirport: {
        type: String,
        required: true
    },
    fromCity: {
        type: String,
        required: true
    },
    toCity: {
        type: String,
        required: true
    },
    departureTime: {
        type: String,
        required: true
    },
    arrivalTime: {
        type: String,
        required: true
    },
    logo: {
        type: [String],
    },
    seats: {
        type: [String],
    },
    cheapestPrice: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        default: false,
    }
})

export default mongoose.model("Flight", FlightSchema)