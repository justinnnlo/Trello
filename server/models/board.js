const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const List = require('./list');
/*{
  "_id": 1,
  "title": "Web dev",
  "createdAt": "2020-10-04T05:57:02.777Z",
  "updatedAt": "2020-10-04T05:57:02.777Z",
  "lists": [
    {
      "_id": 3,
      "title": "CSS",
      "boardId": 1,
      "createdAt": "2020-10-04T06:53:39.302Z",
      "updatedAt": "2020-10-04T06:53:39.302Z",
      "position": 65535.0,
      "cards": [
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
    }
  ]
}
*/

const BoardSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'The Board title is required'],
    },

    lists: [{ type: Schema.Types.ObjectId, ref: 'List' }],
  },
  { timestamps: true }
);

const Board = mongoose.model('Board', BoardSchema);

module.exports = Board;
