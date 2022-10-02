import { Router } from 'express';
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/users';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/', updateUser);
router.delete('/:id', deleteUser);

export default router;