import express from 'express';
import { verifyAdmin } from '../utils/verifyToken.js'
import { countFlightByCity, createFlight, deleteFlight, getFlight, getFlightSeats, getFlights, getTypeFlights, updateFlight } from '../controllers/flight.js';

const router = express.Router();

//CREATE
router.post('/', verifyAdmin, createFlight)
//UPDATE
router.put('/:id', verifyAdmin, updateFlight)
//DELETE
router.delete('/:id', verifyAdmin, deleteFlight)
//GET
router.get('/find/:id', getFlight)
//GET ALL
router.get('/', getFlights)
router.get('/countByCity', countFlightByCity)
router.get('/seat/:id', getFlightSeats)
router.get('/type/:type', getTypeFlights)



export default router