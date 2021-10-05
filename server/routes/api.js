const express = require('express');
const router = express.Router();
const boardsController = require('../controllers/boardsController');
const { validateBoard } = require('../validators/validators');

router.get('/boards', boardsController.getBoards);
router.get('/boards/:id', boardsController.getSpecificBoard);
router.post('/boards', validateBoard, boardsController.createBoard);

module.exports = router;
