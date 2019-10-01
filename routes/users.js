const users = require('express').Router()
// const User = require('../models/user')
const { createUser, getAllUsers, getSingleUser } = require('../controllers/users')

users.post('/', createUser)
users.get('/', getAllUsers)
users.get('/:id', getSingleUser)

module.exports = users
