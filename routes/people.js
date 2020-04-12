const express = require('express');
const router = express.Router();
const People = require('../models/person');

// add person
router.post('/add', function(req, res, next) {
  // create object with post info
  let newPerson = new People({
    _id: req.body._id,
    name: req.body.name,
    last_name: req.body.last_name,
  });

  // Add Person
  People.addPerson(newPerson, (err, person) => {
    // if err return the error
    if (err) {
      res.json({
        success: false,
        msg: err
      });
      // Return succes message
    } else {
      res.json({
        success: true,
        msg: 'La persona fue agregada generado'
      });
    }
  });
});

// Get all People
router.get('/getAll', (req, res, next) => {

  People.getAllPeople((err, data) => {
    if (err) {
      res.json({
        success: false,
        msg: 'No hay personas'
      });
    } else {
      res.json({
        success: true,
        data: data
      });
    }
  });
});

module.exports = router;
