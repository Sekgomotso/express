const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');

// add visitor database
const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.DATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PORT
});

// create app
const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// view engine
app.set('/views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

// form route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/form.html"));
});

// submit button route
app.post('/new_visit', (req, res) => {

  // add new visitor
  addNewVisitor(req.body.visitor_name, 
    req.body.assistant, 
    req.body.visitors_age, 
    req.body.date_of_visit, 
    req.body.time_of_visit, 
    req.body.comments)

    // pug message
    return res.render('view', {

      name : req.body.visitor_name,
      assistant: req.body.assistant,
      age: req.body.visitors_age,
      date: req.body.date_of_visit,
      time: req.body.time_of_visit,
      comments: req.body.comments

    })

});

// Save visitor into database
const addNewVisitor = async(name, nameOfAssistant, age, date, time, comments) => {

  try{
  
    query = await pool.query(
      "INSERT INTO Visitors (visitor_name, assistant, visitors_age, date_of_visit, time_of_visit, comments) values ($1, $2, $3, $4, $5, $6)", 
      [name, nameOfAssistant, age, date, time, comments]);

      return query.rows

  } catch(err) {
    console.log(err)

  }
};

// server
const server = app.listen(3000, (req, res) => {
  console.log("server listening on port 3000");
  return;
});

module.exports = server;