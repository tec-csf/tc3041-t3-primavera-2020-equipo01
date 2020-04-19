const express = require('express');
const router = express.Router();
const Buisnesses = require('../models/buisnesses');

// add 
router.post('/add', function(req, res, next) {
  // create object with post info
  let newB = new  Buisnesses({
    _id: req.body._id,
    ywage: req.body.ywage,
    company: req.body.company,
    phone: req.body.phone,
    employeeSince: req.body.employeeSince,
    suppliers: req.body.associates
  });

  // Add 
  Buisnesses.add(newB, (err, data) => {
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
        msg: 'El objeto fue agregado',
        data: data
      });
    }
  });
});

// Get all 
router.get('/getAll', (req, res, next) => {
  Buisnesses.getAll((err, data) => {
    if (err) {
      res.json({
        success: false,
        msg: err
      });
    } else {
      res.json({
        success: true,
        data: data
      });
    }
  });
});


router.put('/update/:id', (req, res, next) => {
    let updateB = new  Buisnesses({
        _id: req.body._id,
        ywage: req.body.ywage,
        company: req.body.company,
        phone: req.body.phone,
        employeeSince: req.body.employeeSince,
        suppliers: req.body.associates
    });

    Buisnesses.update(updateB, (err, data) => {
        if (err) {
            res.json({
            success: false,
            msg: err
            });
        } else {
            res.json({
            success: true,
            data: data
            });
        }
    });
});

router.delete('/delete/:id', (req, res, next) => {
    Buisnesses.delete(req, (err, data) => {
        if (err) {
            res.json({
            success: false,
            msg: err
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
