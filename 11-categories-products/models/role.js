import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const RoleSchema = Schema({
  role: {
    type: String,
    required: [true, 'the role is required'],
  }
});

export default model('role', RoleSchema);