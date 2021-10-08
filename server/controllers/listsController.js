const List = require('../models/list');
const Board = require('../models/board');
const HttpError = require('../models/httpError');
const { validationResult } = require('express-validator');

getLists = (req, res, next) => {
  List.find({}).then((lists) => {
    res.json({ lists });
  });
};

createList = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { title } = req.body.list;
    const { boardId } = req.body;
    const list = new List({
      title: title,
      boardId: boardId,
    });
    list
      .save()
      .then((list) => {
        Board.findByIdAndUpdate(
          boardId,
          { $push: { lists: list._id } },
          { new: true }
        ).then((_) => res.json({ list }));
      })
      .catch((err) => {
        next(new HttpError('Creating list failed, please try again', 500));
      });
  } else {
    return next(HttpError('Input field is empty', 404));
  }
};

editList = (req, res, next) => {
  const id = req.params.id;
  const list = req.body;
  List.findByIdAndUpdate(id, list)
    .then((_) => {
      res.json({ list });
    })
    .catch((err) =>
      next(new HttpError('Editing list failed, please try again', 500))
    );
};

exports.getLists = getLists;
exports.createList = createList;
exports.editList = editList;
