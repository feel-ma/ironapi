

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const creatorSchema = new Schema({
  name: String,
  beer: { type: Schema.Types.ObjectId, ref: 'Beer' }
});

module.exports = model('Task', creatorSchema);
