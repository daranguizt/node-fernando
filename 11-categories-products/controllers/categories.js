import { request, response } from 'express';
import bcryptjs from 'bcryptjs';
import models from '../models/index.js';

const { Category } = models;

export const getCategories = (req, res) => {
  res.json({
    message: 'get controllers',
  })
}

export const getCategoryById = (req, res) => {
  res.json({
    message: 'get by id',
  });
}

export const createCategory = (req, res) => {
  const name = req.body.name.toUpperCase();

  const category = 
  res.json({
    message: 'create category',
  });
}

export const updateCategory = (req, res) => {
  res.json({
    message: 'update category',
  });
}

export const deleteCategory = (req, res) => {
  res.json({
    message: 'delete category',
  });
}