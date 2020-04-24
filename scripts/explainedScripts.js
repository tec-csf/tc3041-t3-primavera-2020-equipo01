// Unwind query
// Displays the locations a confirmed case has been to recently
db.Cases.explain().aggregate([{$match: {isConfirmed:true}},
  {$project: {_id:1, name:1, last_name:1, age:1, recentlyVisited:1}},
  {$unwind: "$recentlyVisited"},
  {$sort:{age:-1}},
  {$limit: 5}])

// Obtain average of yearly wage
var average = db.Businesses.aggregate([{ "$group": { "_id": "null", avg: { "$avg": "$ywage"} }}]).toArray()[0]["avg"];

// Displays number of people below and above average wage grouped into confirmed and dismissed cases
db.explain().Businesses.aggregate([{$lookup: {from: "Cases", localField: "_id", foreignField: "_id", as: "Info"}},
	{$group: {
		_id: "$Info.isConfirmed",
		"total_above_avg_income": {
            "$sum": { "$cond": [
                { "$gt": [ "$ywage", average ] },
                1,
                0
            ]}
        },
		"total_below_avg_income": {
            "$sum": { "$cond": [
                { "$lt": [ "$ywage", average ] },
                1,
                0
            ]}
        }
		}}])

// Displays the network of people that 10 random hosts would infect up to a recursive depth of 10 layers
    db.explain().Cases.aggregate( [
       
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
    ] )

// geoNear, shows the people in cases divided by genre, who are over 60 years old and within a 200km distance of the point
db.explain().Cases.aggregate( [
  {
    '$geoNear': {
      'near': {
        'type': 'Point', 
        'coordinates': [
          99.1332, 19.4326
        ]
      }, 
      'distanceField': 'dist.calculated', 
      'maxDistance': 200000, 
      'includeLocs': 'dist.coordinates', 
      'spherical': true
    }
  }, {
    '$match': {
      'age': {
        '$gte': 60
      }
    }
  }, {
    '$group': {
      '_id': '$gender', 
      'People': {
        '$addToSet': '$last_name'
      }
    }
  }, {
    '$sort': {
      'location': 1
    }
  }
])


// Facet, first part divides the people confirmed with covid19 by age group in cases, second part divides the confirmed cases by genre in alphabetical order and shows the complete names.

db.explain().Cases.aggregate( 
[
  {
    '$match': {
      'isConfirmed': true
    }
  }, {
    '$facet': {
      'age': [
        {
          '$bucket': {
            'groupBy': '$age', 
            'boundaries': [
              20, 30, 40, 50, 60, 70, 80
            ], 
            'default': 'other', 
            'output': {
              'count': {
                '$sum': 1
              }, 
              'who': {
                '$addToSet': {
                  '$concat': [
                    '$name', ' ', '$last_name'
                  ]
                }
              }
            }
          }
        }
      ], 
      'gender': [
        {
          '$sort': {
            'name': 1
          }
        }, {
          '$group': {
            '_id': '$gender', 
            'who': {
              '$push': {
                '$concat': [
                  '$name', ' ', '$last_name'
                ]
              }
            }
          }
        }
      ]
    }
  }
])


