const mongoose = require('mongoose');

const CountrySchema = mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
});

const Countries = module.exports = mongoose.model('Countries', CountrySchema);

module.exports.addCountry = (newCountry, callback) => {
  newCountry.save(callback);
}

// Make the query and bring one user by the username from the DB
module.exports.getCountryByname = (name, callback) => {
  const query = {
    name: name
  }
  Countries.findOne(query, callback);
}


