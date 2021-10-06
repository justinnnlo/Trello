const List = require('../models/list');
const HttpError = require('../models/httpError');

getLists = (req, res, next) => {
  List.find({}).then((lists) => {
    res.json({ lists });
  });
};
createList = (req, res, next) => {
  List.create(req.body.list)
    .then((list) => {
      List.findById(list._id);
    })
    .then((list) => res.json({ list }))
    .catch((err) => {
      return next(err);
    });
};

exports.createList = createList;
exports.getLists = getLists;
