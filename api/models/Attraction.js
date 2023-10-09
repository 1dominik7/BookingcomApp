import mongoose from "mongoose";

const AttractionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true  
    },
    shortDesc: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    photos: {
        type: [String],
    },
    time: {
        type: [String],
        required: true
    },
    rate: {
        type: String,
        required: true
    },
    category: {
        type: String,
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

export default mongoose.model("Attraction", AttractionSchema)