const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: String,
  owner: String,
  likes: Array,
  createdAt: Date,
})

module.exports = mongoose.model('card', cardSchema)
