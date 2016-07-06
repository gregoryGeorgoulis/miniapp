// Reqs
var express = require('express');
var mongoose = require('mongoose');
var db = process.env.MONGODB_URI || "mongodb://localhost/orders";
var router = express.Router();
var Order = require('../models/model.js');


router.get('/', function(req,res) {


var order1 = new Order({
	client: 'guest',
	style: 'fitted',
	color: 'black',
	frontDesign:'var = guest',
	backDesign: 'WDI',
	rightSideDesign:'D Guest'
})

order1.save();

console.log('============');
console.log(order1);
console.log('============');

res.end();

})
module.exports = router;