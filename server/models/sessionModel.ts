const mongoose = require('mongoose');
const { Schema } = mongoose;


const sessionSchema = new Schema({
  cookieID: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 30, default: Date.now}
})


export default mongoose.model('Session', sessionSchema);