import { request, response } from 'express';
import bcryptjs from 'bcryptjs';
import User from '../models/user.js';
import user from '../models/user.js';

export const getUsers = async (req = request, res = response) => {
  const {
    name = '',
    page = 1,
    limit = 5,
    offset = 0,
  } = req.query;

  const query = { isActive: true };
  if ( name ){
    query.name = {
      "$regex": name
    };
  }

  const [users, total] = await Promise.all([
    User.find(query)
      .skip(Number(offset + (Number(page)-1)*Number(limit)))
      .limit(Number(limit)),
    User.countDocuments(query),
  ]);

  res.json({
    results: users,
    paging: {
      page: Number(page),
      limit: Number(limit),
      total,
      pages: Math.ceil(total/limit,0),
    }
  })
}

export const createUser = async (req, res = fd) => {
  try {

    const { name, email, password, img, role } = req.body;
    const newUser = new User({
      name,
      email,
      password,
      img,
      role
    });

    // Encriptar - salt es la cantidad de iteraciones de hash
    const salt = bcryptjs.genSaltSync(10);
    newUser.password = bcryptjs.hashSync(password, salt);

    await newUser.save();
    res.status(201).json({
      message: 'User created successfully',
      newUser,
    });
  } catch (e) {
    res.status(400).send(e);
  }

}

export const updateUser = async (req, res = response) => {
  const { id } = req.params;
  const { password, google, ...rest } = req.body;

  if (password) {
    const salt = bcryptjs.genSaltSync(10);
    rest.password = bcryptjs.hashSync(password, salt);
  }

  const update = await User.findByIdAndUpdate(id, rest);
  res.json({
    message: 'User updated successfully',
    update,
  });
}

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  // BORRAR REAL
  //const deleted = await User.findByIdAndDelete(id);

  // SOFT DELETE
  const deleted = await User.findByIdAndUpdate(id, {
    isActive: false,
  })
  
  res.json({
    message: 'User deleted successfully',
    deleted
  });
}