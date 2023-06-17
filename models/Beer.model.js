
 
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const beerSchema = new Schema({
    title: String,
    description: String,
    Creator: [{ type: Schema.Types.ObjectId, ref: 'Creator' }]
  });
   
  module.exports = model('Beer', beerSchema);