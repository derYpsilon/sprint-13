const users = require('express').Router()
// const User = require('../models/user')
const { createUser } = require('../controllers/users')

users.post('/', createUser)

module.exports = users
