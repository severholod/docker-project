const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: [String], required: true },
    age: { type: Number, required: true },
    position: { type: String, required: false },
  },
  { timestamps: true },
)

module.exports = mongoose.model('users', User)