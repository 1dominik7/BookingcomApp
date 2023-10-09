import mongoose from "mongoose";

const TaxiSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    fromPlace: {
        type: String,
        required: true
    },
    toPlace: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    logo: {
        type: [String],
    },
    seats: {
        type: Number,
        required: true
    },
    suitcase: {
        type: Number,
        required: true
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

export default mongoose.model("Taxi", TaxiSchema)