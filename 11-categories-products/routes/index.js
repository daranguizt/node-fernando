import { Router } from 'express';
import usersRoutes from './users.js';
import authRoutes from './auth.js';
import categoriesRoutes from './categories.js';
import middlewares from '../middlewares/index.js';

const { authMiddlewares: {validateJWT},
  rolesMiddlewares: {hasRole}
} = middlewares;

const router = Router();

router.use('/api/auth', authRoutes);
router.use(
  '/api/users',
  [
    validateJWT,
    hasRole
  ]
  , usersRoutes
);
router.use('/api/categories', categoriesRoutes);
router.use('*', (req, res) => {
  res.status(404).json({
    message: 'Endpoint does not exist',
  })
})

export default router;