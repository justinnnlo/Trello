const express = require('express');
const cardsRouter = express.Router();
const cardsController = require('../controllers/cardsController');

cardsRouter.get('/', cardsController.getCards);
cardsRouter.post('/', cardsController.createCard);

module.exports = cardsRouter;
