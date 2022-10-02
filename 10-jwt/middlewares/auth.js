import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import User from '../models/user.js';

export const validateUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({
        message: 'User or password incorrect'
      });
    }

    if (!user.isActive) {
      res.status(400).json({
        message: 'User is not active'
      });
    }

    const isValidPassword = bcryptjs.compareSync(password, user.password);
    if (!isValidPassword) {
      res.status(404).json({
        message: 'User or password incorrect'
      });
    }

    const { __v, _id, password: userPassword, ...userData } = user._doc;

    req.user = {
      ...userData,
      uid: _id
    }

    next();
  } catch (e) {
    next(e);
  }
}

export const validateJWT = async (req, res, next) => {
  try {
    const token = req.header('x-token');

    if (!token) {
      res.status(400).json({
        message: 'No token present on request',
      });
    }

    const { uid } = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(uid);
    const { __v, _id, password: userPassword, ...userData } = user._doc;
    req.user = {
      ...userData,
      uid
    }

    next();
  } catch (e) {
    console.log(e);
    res.status(400).json({
      message: 'Invalid token',
    })
  }
}