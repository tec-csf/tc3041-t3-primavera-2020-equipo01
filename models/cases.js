const mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose);

const CasesSchema = mongoose.Schema({
  _id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  age:{
    type: Number,
  },
  gender:{
    type: String
  },
  isConfirmed:{
    type: Boolean,
  },
  location:{
    type: Number
  },
  latitude:{
    type: Float
  },
  longitude:{
    type: Float
  },
  recentlyVisited:[{
    type: String
  }],
  closestFriends: [{
    type: String
  }]
});

const Cases = module.exports = mongoose.model('Cases', CasesSchema, 'Cases');

module.exports.add = (newCase, callback) => {
  newCase.save(callback);
}


module.exports.getAll = (callback) => {
  Cases.find(callback).limit(100);
}

module.exports.delete = (req, callback) => {
  const { id } = req.params;
  Cases.findByIdAndDelete(id, callback);
};

module.exports.update = (data, callback) => {
  Cases.findByIdAndUpdate(data._id, data , callback);
};