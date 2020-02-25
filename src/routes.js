const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const Pool = require("pg").Pool;

require('dotenv').config();

const pool = new Pool({
  user: "user",
  host: "localhost",
  database: "prospective_umuzi_students",
  password: "pass",
  port: 5432
});

app.use(bodyParser.urlencoded({ extended: false }));

// view engine
app.set('./views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

// form route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/form.html"));
});

// submit button route
app.post('/new_visit', (req, res) => {
  addNewVisitor(req.body.name, req.body.age, req.body.date, req.body.time, req.body.assistant, req.body.comments);
res.sendFile(__dirname + '/form.html')
});

// save visitor into database
const addNewVisitor = async(name, age, date, time, nameOfAssistant, comment) => {

  pool
  .query(
    "INSERT INTO Visitors (visitor_name, visitors_age, date_of_visit, time_of_visit, assistant, comments) values ($1, $2, $3, $4, $5, $6)", 
    [name, nameOfAssistant, age, date, time, comment])
  .then(data => (data.rows))
  .catch(err => console.error("nope", err.stack))
};

// pug message
app.post("/done", (req, res) => {
  if(!req.body) throw new Error('body cannot be empty')

  res.render('view', {
    name : res.body.name
  })
});

const visits = app.listen(3001, (req, res) => {
  console.log("server running");
  return;
});

module.exports = visits;