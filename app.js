const express   = require('express');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require("body-parser");
const session  = require('express-session');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
var cors=require('cors');
const config = require("./config/database")
const passport = require('passport');
var flash    = require('connect-flash');


//connect to database
mongoose.connect(config.database);
//on connection
mongoose.connection.on('connected', () => {
  console.log('connected to database '+config.database);
});
//on error
mongoose.connection.on('error', () => {
  console.log('Database Erro '+config.database);
});

//bad
var multer  =   require('multer');
//multer
var filename_path;
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public/uploads');
  },

  filename: function (req, file, callback) {
    //console.log(req);
    filename_path=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
    callback(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname));
  }
});
var upload = multer({ storage : storage}).single('image');




//express
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'frontend')));


//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

//port
const port = process.env.PORT || 3000;

//cors
app.use(cors());

//bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//cross origin enabler
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//index route
app.get('/',(req,res) =>{
  res.send('Invalid Endpoint');
})


//routers
const fetch = require('./routes/fetchs');
const add = require('./routes/adds');
const d_delete = require('./routes/deletes');
const s_set = require('./routes/sets');
const users = require('./routes/users');

//use routers
app.use('/fetchs',fetch);
app.use('/adds',add);
app.use('/deletes',d_delete);
app.use('/sets',s_set);
app.use('/users',users);

//


app.get('/admin', (req,res) =>{
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/VisionTrucking', (req,res) =>{
  res.sendFile(path.join(__dirname, 'frontend/index.html'));
});

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


// app.get('*', (req,res) =>{
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// });

//Profile
// app.get('/', passport.authenticate('jwt',{session:false}),(req,res,next) => {
//   res.json({user: req.user});
// });
//
// app.get('/edit',function(req,res){
//   res.sendFile(path.join(__dirname+'/public/edit_product.html'));
// });
//
// app.get('/gallery',function(req,res){
//   res.sendFile(path.join(__dirname+'/public/edit_product_gallery.html'));
// });
//
// app.get('/VisionTrucking', passport.authenticate('jwt',{session:false}),(req,res,next) => {
//   res.sendFile(path.join(__dirname+'/public/front_end/index.html'));
// });
//
// app.get('/ProductGallery',function(req,res){
//   res.sendFile(path.join(__dirname+'/public/front_end/product.html'));
// });




app.listen(port,  () => {
  console.log('Server started on port'+port);
});
