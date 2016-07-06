//Reqs
var mongoose = require('mongoose');
 var OrderSchema = new mongoose.Schema({
 	client:String,
 	style:String,
 	color:String,
 	frontDesign:String,
 	backDesign:String,
 	rightSideDesign:String
 });
 var Order = mongoose.model('Order',OrderSchema);

 module.exports = Order;

