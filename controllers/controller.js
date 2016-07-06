var express = require('express');
var router = express.Router();
var Order = require('../models/model.js');

//new 
router.get('/new',function(req,res){
	res.render('new.ejs');
});
//index
router.get('/', function(req,res) {
	Order.find().then(function(order) {
		res.render('index.ejs',{order})
	})
});
//show 
router.get('/:id', function(req,res) {
	Order.findById(req.params.id).then(function(order) {
		res.render('show.ejs', {order})
	})
});
//edit
router.get('/:id/edit', function(req,res) {
	Order.findById(req.params.id).then(function(order) {
		res.render('edit.ejs', {order})
	})
});
//update
router.put('/:id', function(req,res) {
	Order.findOneAndUpdate({_id:req.params.id},
	{$set:req.body});
	res.redirect('/:id');
});

//create 
router.post('/',function(req,res){
	var order = new Order(req.body);
	order.save(function(err){
		if (err) {
			console.log(err);
		}else{
			console.log('new creation');
		}
	})
	res.redirect('/orders/');
});

module.exports = router;