import { Router } from 'express';
import { check } from 'express-validator';
import { login } from '../controllers/auth.js';
import validateFields from '../middlewares/validate-fields.js';
import  { validateUser } from '../middlewares/auth.js';

const router = Router();

router.post('/login',
  check('email', 'Email is mandatory').not().isEmpty(),
  check('password', 'Password is mandatory').not().isEmpty(),
  validateUser,
  validateFields
,login)

export default router;