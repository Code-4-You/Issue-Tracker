const mongoose= require('mongoose');
require('dotenv').config();
const express = require('express');

const db = require('./config/mongoose');
const port = process.env.PORT || 8000;
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

app.use(express.urlencoded());
app.use(express.static('assets'));
app.use(expressLayouts);

const DB = 'mongodb+srv://SanskarGupta:IssueTracker@@cluster0.sjqfgef.mongodb.net/Issue_Tracker_Data?retryWrites=true&w=majority'

mongoose.connect(DB,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
  useFindAndModify:false,
  

}).then(()=>{
  console.log('Communication Successful');
}).catch((err)=>console.log('Error here',err));

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// use express router
app.use('/', require('./routes'));
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
