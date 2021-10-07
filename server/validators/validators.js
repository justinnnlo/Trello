const { check } = require('express-validator');

const validateBoard = [check('board.title').not().isEmpty()];
const validateList = [check('list.title').not().isEmpty()];

exports.validateBoard = validateBoard;
exports.validateList = validateList;
