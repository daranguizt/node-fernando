import { Router } from 'express';
import usersRoutes from './users.js';

const router = Router();

router.use('/api/users', usersRoutes)
router.use('*', (req, res) => {
  res.status(404).json({
    message: 'Endpoint does not exist',
  })
})

export default router;