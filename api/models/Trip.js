import mongoose from "mongoose";

const TripSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    type: {type: String},
    id: {type: String },
    optionId: [String],
    roomNumber: [String],
    data: {
        dataStart: Date,
        dataEnd: Date
    },
    insurance: [Boolean],
    pickup: [String],
    return: [String],
    price: [Number],
    value1: [String],
    value2: [String]
},
{
    timestamps: true
}
)

export default mongoose.model("Trip", TripSchema)