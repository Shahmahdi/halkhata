var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/add', function(req, res, next) {
  res.send('user add api');
});

router.get('/update', function(req, res, next) {
  res.send('user update api');
});

router.get('/user/:id', function(req, res, next) {
  res.send('user view api');
});

router.get('/delete', function(req, res, next) {
  res.send('user delete api');
});

module.exports = router;
