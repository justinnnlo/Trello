const express = require('express');
const listsRouter = express.Router();
const listsController = require('../controllers/listsController');

listsRouter.post('/', listsController.createList);

module.exports = listsRouter;
