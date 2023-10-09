import Flight from "../models/Flight.js"
import Seat from "../models/Seat.js"

export const createFlight = async (req, res, next) => {
    const newFlight = new Flight(req.body)

    try {
        const savedFlight = await newFlight.save()
            res.status(200).json(savedFlight)
    } catch (err) {
        next(err)
    }
}

export const updateFlight = async (req, res, next) => {

    try {
        const updatedFlight = await Flight.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updatedFlight)
    } catch (err) {
        next(err)
    }
}

export const deleteFlight = async (req, res) => {

    try {
       await Flight.findByIdAndDelete(
            req.params.id
        )
            res.status(200).json("Flight has been deleted.")
    } catch (err) {
        next(err)
    }
}

export const getFlight = async (req, res) => {

    try {
        const flight = await Flight.findById(
            req.params.id
        )
            res.status(200).json(flight)
    } catch (err) {
        next(err)
    }
}

export const getFlights = async (req, res, next) => {
    const {min,max,limit, ...others} = req.query
    try {
        const flights = await Flight.find({
            ...others,
            cheapestPrice: { $gt: min || 1, $lt: max || 9999},
        }).limit(req.query.limit)
            res.status(200).json(flights)
    } catch (err) {
        next(err)
    }
}

export const getTypeFlights = async (req, res) => {

    try {
        const flight = await Flight.find(
            req.params.type
        )
            res.status(200).json(flight)
    } catch (err) {
        next(err)
    }
}

export const getFlightsByType = async (req, res) => {

    try {
        const flight = await Flight.find(
            req.params.type
        )
            res.status(200).json(flight)
    } catch (err) {
        next(err)
    }
}


export const countFlightByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city => {
            return Flight.countDocuments({ city:city})
        }))
            res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}

export const getFlightSeats = async (req, res, next) => {
    try {
        const flight = await Flight.findById(req.params.id)
        const list = await Promise.all(flight.seats.map(seat => {
            return Seat.findById(seat)
        }))
        res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}