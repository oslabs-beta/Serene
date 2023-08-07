const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  ARN: { type: String, required: true },
  region: { type: String, required: true, default: 'us-west-1' }
})


module.exports = mongoose.model('User', User);