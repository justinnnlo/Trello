const express = require('express');
const listsRouter = express.Router();
const listsController = require('../controllers/listsController');

listsRouter.post('/', listsController.createList);
listsRouter.put('/:id', listsController.editList);

module.exports = listsRouter;
