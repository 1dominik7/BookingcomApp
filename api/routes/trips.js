import express from 'express';
import { createTrip, getUserTrip } from '../controllers/trip.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';


const router = express.Router();

//CREATE
router.post('/:userId', verifyUser, createTrip)

//GET ALL
router.get('/', verifyAdmin, createTrip)

//GET USER TRIP
router.get('/find/:userId',verifyToken, getUserTrip)




export default router