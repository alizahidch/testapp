// AdUnit.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let AdUnit = new Schema({
  sales_date: {
    type: String
  },
  sales_amount: {
    type: Number
  }
},{
    collection: 'adunits'
});

module.exports = mongoose.model('AdUnit', AdUnit);