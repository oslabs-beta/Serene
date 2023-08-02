const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  ARN: { type: String, required: false },
  region: { type: String, required: true, default: 'us-west-1' },
  externalID: { type: String, required: false }
})


module.exports = mongoose.model('User', User);