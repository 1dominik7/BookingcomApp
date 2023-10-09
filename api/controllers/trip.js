import Trip from "../models/Trip.js";
import User from "../models/User.js";

export const createTrip = async (req, res, next) => {
    const userId = req.params.userId
    const newTrip = new Trip(req.body)

    try {
        const savedTrip = await newTrip.save()
        try {
            await User.findByIdAndUpdate(userId,
                {
                    $push: { trips: savedTrip._id }
                })
    
        } catch (err) {
            next(err)
        }
        res.status(200).json(savedTrip)
    } catch (err) {
        next(err)
    }
}

export const getAllTrips = async (req, res) => {
    try {
        const trips = await Trip.find()
        res.status(200).json(trips)

    } catch (err) {
        res.status(500).json(err)
    }
}

export const getUserTrip = async (req, res) => {
    try {
        const trips = await Trip.find({userId: req.params.userId});
        res.status(200).json(trips)
    } catch (err) {
        res.status(500).json(err)
    }
}

