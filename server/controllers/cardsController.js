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
  Card.findById(req.params.id).then((card) => res.json({ card }));
};

exports.getCards = getCards;
exports.createCard = createCard;
exports.getCard = getCard;
