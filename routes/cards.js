const cards = require('express').Router()
const { createCard, getAllCards, deleteCard } = require('../controllers/cards')

console.log('router')
cards.post('/', createCard)
cards.get('/', getAllCards)
cards.delete('/:id', deleteCard)

module.exports = cards
