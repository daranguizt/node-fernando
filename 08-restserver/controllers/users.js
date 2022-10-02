import { request, response } from 'express';

export const getUsers = (req = request, res = response) => {
  const { 
    name = '', 
    ids = '',
    page = 1,
    limit = 10,
  } = req.query;
  res.json({
    results: [],
    paging: {
      page,
      limit,
      total: 0,
      pages: 0,
    }
  })
}

export const updateUser = (req, res = response) => {
  const { id, name } = req.params;
  res.json({
    message: 'User updated successfully',
    id,
    name
  });
}

export const createUser = (req, res = fd) => {
  const { id, name } = req.body;
  res.status(201).json({
    message: 'User created successfully',
    id,
    name,
  });
}

export const deleteUser = (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'User deleted successfully',
    id,
  });
}