const express = require('express');
const app = express();
const path = require("path");
const PORT = 8001;
const db = require("./db/dbIndex");
const bodyParser = require('body-parser');

// routes constants
const users = require("./routes/users");


//initializing middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/api/users", users(db));



//app listening
app.listen(PORT, ()=>{
  console.log(`app is listening at port ${PORT}`);
});