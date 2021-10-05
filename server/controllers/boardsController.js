const Board = require('../models/board');
const HttpError = require('../models/httpError');
const { validationResult } = require('express-validator');

const getBoards = (req, res, next) => {
  Board.find({}, 'title _id createdAt updatedAt').then((boards) => {
    res.json({
      boards,
    });
  });
};

const getSpecificBoard = (req, res, next) => {
  const id = req.params.id;
  Board.findById(id)
    .populate({ path: 'lists' })
    .then((board) => {
      if (!board) {
        throw new HttpError(`board does not exist`, 404);
      }
      res.json(board);
    })
    .catch((err) => {
      next(new HttpError('Server failed to retrieve board', 500));
    });
};

const createBoard = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    Board.create(req.body.board)
      .then((board) => {
        Board.find({ _id: board._id }, 'title _id createdAt updatedAt').then(
          (board) => res.json({ board })
        );
      })
      .catch((err) =>
        next(new HttpError('Creating board failed, please try again', 500))
      );
  } else {
    return next(new HttpError('The input field is empty.', 404));
  }
};

exports.getBoards = getBoards;
exports.createBoard = createBoard;
exports.getSpecificBoard = getSpecificBoard;
