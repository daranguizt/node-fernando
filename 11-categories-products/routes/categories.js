import { Router } from 'express';
import { check } from 'express-validator';
import { createCategory, deleteCategory, getCategories, getCategoryById, updateCategory } from '../controllers/categories.js';
import middlewares from '../middlewares/index.js';

const { authMiddlewares: {validateJWT},
  validateFieldsMiddleware: {validateFields}
} = middlewares;

const router = Router();

router.get('/', getCategories);

router.get('/:id', getCategoryById);

router.post('/:id', [
  validateJWT,
  check('name', 'Name is mandatory').not().isEmpty(),
  validateFields
], createCategory);

router.put('/:id', updateCategory);

router.delete('/:id', deleteCategory);



export default router;