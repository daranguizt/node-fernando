import { Router } from 'express';
import { createUser, deleteUser, getUsers, updateUser } from '../controllers/users.js';

const router = Router();

router.get('/', getUsers);

router.put('/:id', updateUser);

router.post('/', createUser);

router.delete('/:id', deleteUser);

export default router;