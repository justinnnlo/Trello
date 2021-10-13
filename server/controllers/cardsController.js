const Card = require('../models/card');
const List = require('../models/list');
const HttpError = require('../models/httpError');
const { validationResult } = require('express-validator');

const getCards = (req, res, next) => {
  Card.find({}).then((cards) => res.json({ cards }));
};

const createCard = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { title, listId, boardId } = req.body;
    const card = new Card({
      title,
      listId,
      boardId,
    });
    card.save().then((card) => {
      List.findByIdAndUpdate(
        card.listId,
        { $push: { cards: card._id } },
        { new: true }
      ).then((_) => res.json({ card }));
    });
  } else {
    return next(HttpError('Missing required info', 400));
  }
};

const getCard = (req, res, next) => {
  Card.findById(req.params.id)
    .then((card) => {
      if (!card) {
        next(new HttpError('Could not find card', 404));
      }
      res.json({ card });
    })
    .catch((err) => next(new HttpError('Failed to get card', 500)));
};

const editCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((card) => {
      if (!card) {
        next(new HttpError('Could not find card', 404));
      }
      res.json({ card });
    })
    .catch((err) => next(new HttpError('Failed to edit card', 500)));
};

exports.getCards = getCards;
exports.createCard = createCard;
exports.getCard = getCard;
exports.editCard = editCard;
