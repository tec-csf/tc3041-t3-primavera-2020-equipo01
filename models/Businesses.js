const mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose);

const BusinessesSchema = mongoose.Schema({
  _id: {
    type: Int,
    required: true
  },
  ywage:{
    type: Float,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  employeeSince:{
    type: String
  },
  associates:[{
    type: Number
  }]
  
});

const Businesses = module.exports = mongoose.model('Businesses', BusinessesSchema);

module.exports.addBusiness = (newBusiness, callback) => {
  newBusiness.save(callback);
}
