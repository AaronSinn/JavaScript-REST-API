import express from "express";
import { getUsers, createUsers, updateUser, deleteUser } from "../controllers/users.js";

const router = express.Router();

//app.use sets deafult to /user
router.get('/', getUsers);
router.post('/', createUsers);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;