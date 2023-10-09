import express from 'express';
import { verifyAdmin } from '../utils/verifyToken.js'
import { countByAttractionsCategory, countByCityAttractions, createAttraction, deleteAttraction, getAttraction, getAttractions, updateAttraction } from '../controllers/attractions.js';

const router = express.Router();

//CREATE
router.post('/', verifyAdmin, createAttraction)
//UPDATE
router.put('/:id', verifyAdmin, updateAttraction)
//DELETE
router.delete('/:id', verifyAdmin, deleteAttraction)
//GET
router.get('/find/:id', getAttraction)
//GET ALL
router.get('/', getAttractions)
router.get('/countByCity', countByCityAttractions)
router.get('/countByCategory', countByAttractionsCategory)



export default router