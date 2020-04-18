const mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose);

const CasesSchema = mongoose.Schema({
  _id: {
    type: Int,
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
    type: Int,
  },
  gender:{
    type: String
  },
  isConfirmed:{
    type: Boolean,
  },
  country:{
    type: String
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

const Cases = module.exports = mongoose.model('Cases', CasesSchema);

module.exports.addCase = (newCase, callback) => {
  newCase.save(callback);
}
