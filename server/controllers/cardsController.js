const Card = require('../models/card');
const HttpError = require('../models/httpError');
const { validationResult } = require('express-validator');

const getCards = (req, res, next) => {
  Card.find({}).then((cards) => res.json({ cards }));
};

const createCard = (req, res, next) => {
  Card.create(req.body.card).then((card) => res.json({ card }));
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
  Card.findByIdAndUpdate(req.params.id, req.body)
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
