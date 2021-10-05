const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({

});

const Card = Mongoose.Model('Card', CardSchema);

module.exports = Card;