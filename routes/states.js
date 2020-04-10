const express = require('express');
const router = express.Router();
const States = require('../models/state');

//Register a  state
router.post('/add', (req, res, next) => {
  let newState = new States({
    name: req.body.name,
  });

  const name = req.body.name;
  // check if state already exists
  States.getStatebyName(name, (err, state) => {
    if (err) throw err;
    if (!state) {
      // Add the state to the db
      State.addState(newState, (err, state) => {
        if (err) {
          res.json({
            success: false,
            msg: err
          });
        } else {
          res.json({
            success: true,
            msg: 'Se agrego el estado'
          });
        }
      });
    } else {
      return res.json({
        success: false,
        msg: 'Ya hay un estado con ese nombre'
      });
    }
  });
});

router.post('/getByName',(req, res, next) => {
  const name = req.body.name;

  States.getStatebyName(name, (err, data) => {
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
