const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Board = require('./board');
const Card = require('./card');

/* 
{
  "_id": 3, // auto gen
  "title": "CSS",
  "boardId": 1,
  "createdAt": "2020-10-04T06:53:39.302Z",
  "updatedAt": "2020-10-04T06:53:39.302Z",
  "position": 65535.0,
  "cards": []
}
*/

const ListSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    boardId: {
      type: Schema.Types.ObjectId,
      ref: 'Board',
    },
    position: {
      type: Number,
    },
    cards: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Card' }],
    },
  },
  { timestamps: true }
);

const List = mongoose.model('List', ListSchema);

module.exports = List;
