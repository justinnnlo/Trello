const List = require('../models/list');
const HttpError = require('../models/httpError');
const { validateResult } = require('express-validator');

getLists = (req, res, next) => {
  List.find({}).then((lists) => {
    res.json({ lists });
  });
};

createList = (req, res, next) => {
  const errors = validateResult(req);
  if (errors.empty()) {
    console.log('what is this in createList:', req.body);
    const list = new List({
      title: req.body.list.title,
      boardId: req.body.boardId,
    });
    list.save();
    List.create(req.body.list)
      .then((list) => {
        List.findById(list._id);
      })
      .then((list) => res.json({ list }))
      .catch((err) => {
        return next(err);
      });
  }
};

exports.createList = createList;
exports.getLists = getLists;
