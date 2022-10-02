import authMiddlewares from './auth.js';
import rolesMiddlewares from './roles.js';
import validateFieldsMiddleware from './validate-fields.js';

const middlewares = {
  authMiddlewares,
  rolesMiddlewares,
  validateFieldsMiddleware,
}

export default middlewares;