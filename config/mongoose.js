// require('dotenv').config();
// require the library
// const mongoose = require('mongoose');

// here we are using the MongoDB Url we defined in our ENV file
// let DB_URL = process.env.DB_URL;

// connect to the database
// mongoose.connect(DB_URL , 
//   {
//     usenewurlparser: true,
//     useunifiedtopology: true
//   }).then(()=>{
//     console.log(`connection successful `);
//   }).catch((err)=>{
//     console.log(`error connecting to database` , err);
//   })
 
const mongoose = require('mongoose');

const db = main().catch(err => console.log(err));

async function main() {
  //nodeawait mongoose.connect('mongodb://127.0.0.1:27017/testDb');
  console.log("Successfully connected to MongoDB");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = db;
// acquire connection (to check if its successful)
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

// db.once('open', function () {
//   console.log('Connected to Database :: MongoDB');
// });

// module.exports = db;
