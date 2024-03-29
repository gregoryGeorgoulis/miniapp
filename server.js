//////////
//Reqs
/////////
var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var ejs = require('ejs');
var mongoUri = process.env.MONGODB_URI || "mongodb://localhost/orders";
var port = process.env.PORT || 3000;
//////////
//middle Ware
/////////
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));
//////////
//Database
//////////
mongoose.connect(mongoUri);
//////////
//controllers 
//////////
var userController = require('./controllers/controller.js');
app.use('/orders', userController);

var seedController = require('./controllers/seed.js');
app.use('/seed', seedController);
//////////
//Listener
//////////
app.listen(port);
console.log('+++++++++++++++++++++++');
console.log('running on port ' + port + ' Gabroni');
console.log('+++++++++++++++++++++++');
