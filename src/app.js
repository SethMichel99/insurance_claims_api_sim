//ensures that express modules from node_modules are used
const express = require ("express");
//creates express object for our application, our app is now express object. (can use get, post, put, delete etc)
const app = express();

//middleware to read front end data as json format
app.use(express.json());

//listens to requests on http/localhost:3000/ (home route)
app.get("/", (req, res) => {
res.send("insurance claims program is running.");

});
//allows other files to use the express object, server can interact with app.js etc.
module.exports = app;