const express = require('express');
const router = express.Router();
const Countries = require('../models/country');

//Register a  state
router.post('/add', (req, res, next) => {
  let Country = new Countries({
    name: req.body.name,
  });

  const name = req.body.name;
  // check if state already exists
  Countries.getCountrybyName(name, (err, country) => {
    if (err) throw err;
    if (!state) {
      // Add the county to the db
      Countries.addCountry(newCountry, (err, country) => {
        if (err) {
          res.json({
            success: false,
            msg: err
          });
        } else {
          res.json({
            success: true,
            msg: 'Se agrego el pais'
          });
        }
      });
    } else {
      return res.json({
        success: false,
        msg: 'Ya hay un pais con ese nombre'
      });
    }
  });
});

router.post('/getByName',(req, res, next) => {
  const name = req.body.name;

  Countries.getStatebyName(name, (err, data) => {
    if (err) {
      res.json({
        success: false,
        msg: 'No se econtro'
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
