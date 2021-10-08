const express = require('express');
const cardsRouter = express.Router();
const cardsController = require('../controllers/cardsController');

cardsRouter.get('/:id', cardsController.getCard);
cardsRouter.post('/', cardsController.createCard);
module.exports = cardsRouter;
