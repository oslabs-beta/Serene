const mongoose = require('mongoose');
const { Schema } = mongoose;


const sessionSchema = new Schema({
  cookieID: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 30, default: Date.now}
})


module.exports = mongoose.model('Session', sessionSchema);