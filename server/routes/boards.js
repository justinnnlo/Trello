const express = require('express');
const boardsRouter = express.Router();
const boardsController = require('../controllers/boardsController');
const { validateBoard } = require('../validators/validators');

boardsRouter.get('/', boardsController.getBoards);
boardsRouter.get('/:id', boardsController.getSpecificBoard);
boardsRouter.post('/', validateBoard, boardsController.createBoard);

module.exports = boardsRouter;
