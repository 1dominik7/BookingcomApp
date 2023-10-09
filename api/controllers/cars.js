import Car from "../models/Car.js"


export const createCar = async (req, res, next) => {
    const newCar = new Car(req.body)

    try {
        const savedCar = await newCar.save()
            res.status(200).json(savedCar)
    } catch (err) {
        next(err)
    }
}

export const updateCar = async (req, res, next) => {

    try {
        const updatedCar = await Car.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updatedCar)
    } catch (err) {
        next(err)
    }
}

export const deleteCar = async (req, res) => {

    try {
       await Car.findByIdAndDelete(
            req.params.id
        )
            res.status(200).json("Car has been deleted.")
    } catch (err) {
        next(err)
    }
}

export const getCar = async (req, res) => {

    try {
        const car = await Car.findById(
            req.params.id
        )
            res.status(200).json(car)
    } catch (err) {
        next(err)
    }
}

export const getCars = async (req, res, next) => {
    const {min,max,limit, ...others} = req.query
    try {
        const cars = await Car.find({
            ...others,
            cheapestPrice: { $gt: min || 1, $lt: max || 999 },
        }).limit(req.query.limit)
            res.status(200).json(cars)
    } catch (err) {
        next(err)
    }
}

export const countByCityCars = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city => {
            return Car.countDocuments({ city:city})
        }))
            res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}