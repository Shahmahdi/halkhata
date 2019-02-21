var express = require('express');
var router = express.Router();

router.get('/add', function(req, res, next) {
  res.send('customer add api');
});

router.get('/update', function(req, res, next) {
  res.send('customer update api');
});

router.get('/customer/:id', function(req, res, next) {
  res.send('customer view api');
});

router.get('/delete', function(req, res, next) {
  res.send('customer delete api');
});

module.exports = router;