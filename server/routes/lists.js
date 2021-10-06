const express = require('express');
const listsRouter = express.Router();
const listsController = require('../controllers/listsController');
// make list controller

listsRouter.get('/', listsController.getLists);
listsRouter.post('/', listsController.createList);

module.exports = listsRouter;
