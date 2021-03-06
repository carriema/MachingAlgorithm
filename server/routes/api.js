const express = require('express');
const router = express.Router();
const Task = require('../database/Task');
const url = require('url');


router.get('/countries', (req, res) => {
  Task.getCountries((err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.json(rows);
    }
  });
});

router.get('/devices', (req, res) => {
  Task.getDevices((err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.json(rows);
    }
  });
});

router.get('/testers', (req, res) => {
  var params = req.query;
  var devices = params.devices;
  var countries = params.countries;
  Task.getTesters([devices, countries], (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.json(rows);
    }
  })
})

module.exports = router;
