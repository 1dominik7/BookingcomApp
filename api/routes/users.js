import express from 'express';
import { deleteUser, getUser, getUserTrips, getUsers, updateUser } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

//UPDATE
router.put('/:id', verifyUser, updateUser)
//DELETE
router.delete('/:id',verifyUser, deleteUser)
//GET
router.get('/:id', verifyUser, getUser)
//GET ALL
router.get('/', verifyAdmin, getUsers)
router.get('/trip/:id', getUserTrips)


export default router