import { Router } from 'express';
import usersRoutes from './users.js';
import authRoutes from './auth.js';
import categoriesRoutes from '../../11-categories-products/routes/categories.js';
import { validateJWT } from '../middlewares/auth.js';
import { hasRole } from '../middlewares/roles.js';

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
router.use('*', (req, res) => {
  res.status(404).json({
    message: 'Endpoint does not exist',
  })
})

export default router;