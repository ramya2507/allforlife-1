const express = require('express');
const app = express();
const PORT = 8010;
const db = require("./db/dbIndex");
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');

// routes constants
const users = require("./routes/users");


//initializing middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

//routes
app.use("/api", users(db));



//app listening
app.listen(PORT, ()=>{
  console.log(`app is listening at port ${PORT}`);
});