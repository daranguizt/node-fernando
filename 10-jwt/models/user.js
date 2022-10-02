import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, 'The name is mandatory'],
  },
  email: {
    type: String,
    required: [true, 'the email is mandatory'],
  },
  password: {
    type: String,
    required: [true, 'the password is mandatory'],
  },
  img: {
    type: String,
  },
  role: {
    type: String,
    enum: ['ADMIN', 'USER'],
    required: [true, 'the role is mandatory'],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdViaGoogle: {
    type: Boolean,
    default: false
  }
});

UserSchema.methods.toJSON = function() {
  const {__v, password, ...user} = this.toObject();
  return user;
}

export default model('user', UserSchema);