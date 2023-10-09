import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    hireBrand: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    seats: {
        type: Number,
        required: true
    },
    logo: {
        type: [String],
    },
    brandLogo: {
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

export default mongoose.model("Car", CarSchema)