var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//Get Inventory
router.get('/purchases', function(req, res, next){
  res.render('./admin/purchases', { title: 'Express'})
})
// Get Clients and vendors
router.get('/clients-prospects', function(req, res, next) {
  res.render('./admin/clients-prospects', { title: 'Express' });
});
// Get Vendors & suppliers
router.get('/vendors-suppliers', function(req, res, next) {
  res.render('./admin/vendors-suppliers', { title: 'Express' });
});
// Get Collections
router.get('/collections', function(req, res, next) {
  res.render('./admin/collections', { title: 'Express' });
});
// Get Payments/Expenses
router.get('/payments', function(req, res, next) {
  res.render('./admin/payments', { title: 'Express' });
});

// Get Users
router.get('/users', function(req, res, next) {
  res.render('./admin/user', { title: 'Express' });
});
// Get Settings
router.get('/settings', function(req, res, next) {
  res.render('./admin/settings', { title: 'Express' });
});



// Get Payments/Expenses
router.get('/admin', function(req, res, next) {
  res.render('login', { title: 'Express' });
});



module.exports = router;