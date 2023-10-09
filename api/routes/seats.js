import express from 'express';
import { verifyAdmin } from '../utils/verifyToken.js';
import { createSeat, deleteSeat, getSeat, getSeats, getSpecifySeatId, updateSeat, updateSeatAvailability } from '../controllers/seat.js';

const router = express.Router();

//CREATE
router.post('/:flightId', verifyAdmin, createSeat)
//UPDATE
router.put('/:id', verifyAdmin, updateSeat)
router.put('/availability/:id', updateSeatAvailability)
//DELETE
router.delete('/:id/:flightId', verifyAdmin, deleteSeat)
//GET
router.get('/:id', getSeat)
//GET SPECYFI
router.get('/seatNumber/:id', getSpecifySeatId)
//GET ALL
router.get('/', getSeats)

export default router