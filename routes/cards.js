const cards = require('express').Router()
const path = require('path')
const jsonReader = require('../modules/jsonreader')

const readCardsList = (req, res) => {
  const getObject = (data) => {
    if (data !== undefined) {
      res.send(data)
    } else {
      res.send({ message: 'Can not read .json file' })
    }
  }
  jsonReader(path.join(__dirname, '../data/cards.json'), getObject)
}

cards.get('/', readCardsList)

module.exports = cards
