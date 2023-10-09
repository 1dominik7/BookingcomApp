import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import flightRoute from './routes/flights.js'
import seatRoutes from './routes/seats.js'
import carsRoute from './routes/cars.js'
import attracionsRoute from './routes/attractions.js'
import taxiRoute from './routes/taxi.js'
import tripsRoute from './routes/trips.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()
dotenv.config()

const connect = async () => {

    try {
        await mongoose.connect(process.env.MONGO)
        console.log('Connected to mongoDB.')
    } catch (err) {
        throw (err)
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('mongoDB disconnected!')
})

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)
app.use("/api/flights", flightRoute)
app.use("/api/seats", seatRoutes)
app.use("/api/carRentals", carsRoute)
app.use("/api/attractions", attracionsRoute)
app.use("/api/taxi", taxiRoute)
app.use("/api/trips", tripsRoute)

app.use((err, req, res, next) => {

    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})

app.listen(8800, () => {
    connect()
    console.log("Connected to backend.")
})