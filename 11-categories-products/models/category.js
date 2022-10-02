import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const CategorySchema = Schema({
  name: {
    type: String,
    required: [true, 'Category is mandatory']
  },
  status: {
    type: Boolean,
    required: [true, 'Category is mandatory'],
    default: true
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'Category is mandatory'],
    ref: 'User'
  }
})

export default model('category', CategorySchema);