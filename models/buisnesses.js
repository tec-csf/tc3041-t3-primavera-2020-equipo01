const mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose);

const BusinessesSchema = mongoose.Schema({
  _id: {
    type: Number,
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
  suppliers:[{
    type: Number
  }]
  
});

const Businesses = module.exports = mongoose.model('Businesses', BusinessesSchema, "Businesses");

module.exports.add = (newB, callback) => {
  newB.save(callback);
}


module.exports.getAll = (callback) => {
  Businesses.find(callback).limit(100);
}

module.exports.delete = (req, callback) => {
  const { id } = req.params;
  Businesses.findByIdAndDelete(id, callback);
};

module.exports.update = (data, callback) => {
  Businesses.findByIdAndUpdate(data._id, data , callback);
};
