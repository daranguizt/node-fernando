import { validationResult } from "express-validator";

const validateFields = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send(errors);
  }
  next();
}

export default validateFields;