var express = require('express');
var router = express.Router();

// GET request: show original form page
router.get('/', function(req, res) {
  res.render('index', { showFormOnly: true });
});

// POST request: show table + form without header
router.post('/', function(req, res) {
  res.render('index', { showFormOnly: false, formData: req.body });
});

module.exports = router;
