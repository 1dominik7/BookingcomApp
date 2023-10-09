import Attraction from "../models/Attraction.js"


export const createAttraction = async (req, res, next) => {
    const newAttraction = new Attraction(req.body)

    try {
        const savedAttraction = await newAttraction.save()
            res.status(200).json(savedAttraction)
    } catch (err) {
        next(err)
    }
}

export const updateAttraction = async (req, res, next) => {

    try {
        const updatedAttraction = await Attraction.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updatedAttraction)
    } catch (err) {
        next(err)
    }
}

export const deleteAttraction = async (req, res) => {

    try {
       await Attraction.findByIdAndDelete(
            req.params.id
        )
            res.status(200).json("Attraction has been deleted.")
    } catch (err) {
        next(err)
    }
}

export const getAttraction = async (req, res) => {

    try {
        const attraction = await Attraction.findById(
            req.params.id
        )
            res.status(200).json(attraction)
    } catch (err) {
        next(err)
    }
}

export const getAttractions = async (req, res, next) => {
    const { min, max, limit, ...others } = req.query
    try {
        const attractions = await Attraction.find({
            ...others,
            cheapestPrice: { $gt: min || 1, $lt: max || 999 },
        }).limit(req.query.limit)
        res.status(200).json(
            attractions)
    } catch (err) {
        next(err)
    }
}

export const countByCityAttractions = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city => {
            return Attraction.countDocuments({ city:city})
        }))
            res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}


export const countByAttractionsCategory = async (req, res, next) => {
    try {
        const toursCount = await Attraction.countDocuments({category:"Tours"})
        const activitiesCount = await Attraction.countDocuments({category:"Activities"})
        const museumsCount = await Attraction.countDocuments({category:"Museums"})

        res.status(200).json([
                {category:"Tours", count:toursCount},
                {category:"Activities", count:activitiesCount},
                {category:"Museums", count:museumsCount},
            ])
    } catch (err) {
        next(err)
    }
}
