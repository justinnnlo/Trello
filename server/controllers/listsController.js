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
  console.log(` in create list~`);
  if (errors.isEmpty()) {
    console.log('what is this in createList:', req.body);
    const { title } = req.body.list;
    const { boardId } = req.body;
    console.log(title, boardId);
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

exports.createList = createList;
exports.getLists = getLists;
