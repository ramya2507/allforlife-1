const express = require('express');
const app = express();
const PORT = 3001;
const db = require("./db/dbIndex");
const bodyParser = require('body-parser');

// routes constants
const users = require("./routes/users");
const jobPost = require("./routes/jobPost");


//initializing middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.use("/api/users", users(db));
app.use("/api/jobpost", jobPost(db));



//app listening
app.listen(PORT, ()=>{
  console.log(`app is listening at port ${PORT}`);
});