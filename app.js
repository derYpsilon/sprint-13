const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const usersRoute = require('./routes/users')
// const cardsRoute = require('./routes/cards')


const { PORT = 3000 } = process.env

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
})

app.use((req, res, next) => {
  req.user = {
    _id: '5d938703e746942950610a5f',
  }

  next()
})

app.use(express.static(path.join(__dirname, 'public')))
app.use('/users', usersRoute)
//app.use('/cards', cardsRoute)
app.get('*', (req, res) => {
  res.status(404).send({ message: 'Page not found' })
})

app.listen(PORT, () => {
  console.log('App is listening to port ', PORT)
})
