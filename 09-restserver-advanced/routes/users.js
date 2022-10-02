import { Router } from 'express';
import { check } from 'express-validator';
import { createUser, deleteUser, getUsers, updateUser } from '../controllers/users.js';
import Role from '../models/role.js';
import validateFields from '../middlewares/validate-fields.js';
import { emailExists, roleExists, userExists } from '../helpers/db-validators.js';

const router = Router();

router.get('/', getUsers);

router.put('/:id', [
  check('id', 'Is not a mongo ID').isMongoId(),
  check('id').custom(userExists),
  check('role').custom(roleExists),
  validateFields,
], updateUser);

router.post('/', [
  check('name', 'The name is mandatory').not().isEmpty(),
  check('password', 'The password should be greater than 6').isLength({ min: 6 }),
  check('email', 'The email is not valid').isEmail(),
  check('role').custom(roleExists),
  check('email').custom(emailExists),
  validateFields
], createUser);

router.delete('/:id', deleteUser);

export default router;