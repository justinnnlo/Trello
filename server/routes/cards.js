const express = require('express');
const cardsRouter = express.Router();
const cardsController = require('../controllers/cardsController');

cardsRouter.post('/', cardsController.createCard);
cardsRouter.get('/:id', cardsController.getCard);
cardsRouter.put('/:id', cardsController.editCard);
cardsRouter.delete('/:id', cardsController.deleteCard);

module.exports = cardsRouter;
