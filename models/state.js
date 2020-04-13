const mongoose = require('mongoose');


const StateSchema = mongoose.Schema({
  _id:{
    type: int,
    Required: True
  },
  name: {
    type: String
  },
  cid :{
    type: String
  },
});


const States = module.exports = mongoose.model('States', StateSchema);

module.exports.getStateById = (id, callback) => {
  States.findById(id, callback);
}

// Make the query and bring one user by the username from the DB
module.exports.getStateByname = (name, callback) => {
  const query = {
    name: name
  }
  States.findOne(query, callback);
}

module.exports.addState = (newState, callback) => {
  newState.save(callback);
}

