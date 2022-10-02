import Role from '../models/role.js';
import User from '../models/user.js';

export const roleExists = async (role = '') => {
  if (role) {
    const roleExists = await Role.findOne({ role })
    if (!roleExists) {
      throw new Error('The role does not match a valid role');
    }
  }
}

export const emailExists = async (email = '') => {
  const exists = await User.findOne({ email });
  if (exists) {
    throw new Error('Email already exists');
  }
}

export const userExists = async (id = '') => {
  const exists = await User.findById(id);
  if (!exists) {
    throw new Error('user does not exists');
  }
} 