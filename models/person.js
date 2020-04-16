const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
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
  covid:{
    type: Boolean,
  },
  cid :{
    type: Int
  },
  sid: {
    type: Int
  }
});

const People = module.exports = mongoose.model('People', PersonSchema);

module.exports.addPerson = (newPerson, callback) => {
  newPerson.save(callback);
}

module.exports.getAllPeople = (callback) => {
  People.aggregate([{
      $project: {
        _id: 0,
        name: 1,
        last_name: 1,
      }
    },
    {
      $sort: {
        _id: 1
      }
    }
  ], callback);
}
