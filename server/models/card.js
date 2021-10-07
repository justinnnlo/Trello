const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Board = require('./board');
const List = require('./list');

/*
[
  {
    "_id": 7,
    "title": "1",
    "dueDate": null,
    "labels": [
      "red",
      "purple"
    ],
    "description": "Selectors",
    "listId": 3,
    "boardId": 1,
    "position": 65535.0,
    "commentsCount": 0
  }
]
*/

const CardSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'The Card Title is required.'],
    },
    dueDate: {
      type: Date,
    },
    labels: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
    },
    listId: {
      type: Schema.Types.ObjectId,
      ref: 'List',
    },
    boardId: {
      type: Schema.Types.ObjectId,
      ref: 'Board',
    },
    position: {
      type: Number,
    },
    commentsCount: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;
