import express from 'express';
import { verifyAdmin } from '../utils/verifyToken.js'
import { countByCityCars, createCar, deleteCar, getCar, getCars, updateCar } from '../controllers/cars.js';

const router = express.Router();

//CREATE
router.post('/', verifyAdmin, createCar)
//UPDATE
router.put('/:id', verifyAdmin, updateCar)
//DELETE
router.delete('/:id', verifyAdmin, deleteCar)
//GET
router.get('/find/:id', getCar)
//GET ALL
router.get('/', getCars)
router.get('/countByCity', countByCityCars)



export default router