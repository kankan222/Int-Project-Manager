var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET product finances & expenses page. */
router.get('/p-fin-exp', function(req, res, next) {
  res.render('./admin/p-fin-exp', { title: 'Express' });
});



// Get Clients and vendors
router.get('/clients-prospects', function(req, res, next) {
  res.render('./admin/clients-prospects', { title: 'Express' });
});
// Get Vendors & suppliers
router.get('/vendor-suppliers', function(req, res, next) {
  res.render('./admin/vendor-suppliers', { title: 'Express' });
});

module.exports = router;