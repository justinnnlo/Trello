const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
{
  "_id": 1,
  "title": "Web dev",
  "createdAt": "2020-10-04T05:57:02.777Z",
  "updatedAt": "2020-10-04T05:57:02.777Z"
}
*/

const CardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    labels: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;
