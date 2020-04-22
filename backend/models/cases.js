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
    type: Number
  }]
});

const Cases = module.exports = mongoose.model('Cases', CasesSchema, 'Cases');

module.exports.addCase = (newCase, callback) => {
  newCase.save(callback);
}


module.exports.getAll = (callback) => {
  Cases.find(callback).limit(100);
}

module.exports.delete = (req, callback) => {
  const { id } = req.params;
  Cases.findByIdAndDelete(id, callback);
};

module.exports.getOne = (req, callback) => {
  const { id } = req.params;
  Cases.findOne({ _id: id }, callback);
};

module.exports.update = (data, callback) => {
  Cases.findByIdAndUpdate(data._id, data , callback);
};

module.exports.vulnerable = (callback) => {
  Cases.aggregate([
    {$match: {isConfirmed:true}}, 
    {$project: {_id:1, name:1, last_name:1, age:1, recentlyVisited:1}},
    {$unwind: "$recentlyVisited"}, {$sort:{age:-1}}, {$limit: 5}], callback)
};

module.exports.distancing = (callback) => {
  Cases.aggregate( [
    { $match: { isConfirmed: true } },
        { $sample: { size: 10 } },
          {$graphLookup: {
             from: "Cases",
             startWith: "$closestFriends",
             connectFromField: "closestFriends",
             connectToField: "_id",
             maxDepth: 10,
             restrictSearchWithMatch:{"isConfirmed": false},
       as: "friendNet"
             
      }
       }, {"$project":{"name":1, "last_name":1, "total_new_vectors":{"$size":"$friendNet"}}}, {$sort:{"total_new_vectors":-1}}
    ], callback )
};
