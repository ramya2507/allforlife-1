const express = require('express');
const router = express.Router();

const { createNewPost } = require('../util/jobPostHelpers');

//api route
module.exports = (db) => {

  router.post('/', (req, res) => {
    // console.log(req.body)
    const { appointmentFor, description, symptomes, insurance, therapy, sexuality, age, language, ethnicity, faith, typeOfPayment, maxPrice, minPrice, appointmentFrequency, timeRequirement, availabilityFrom, availabilityTo } = req.body;
    const jobPostObj = {
      appointmentFor:appointmentFor,
      description:description,
      therapy:therapy,
      symptomes: symptomes,
      insurance: insurance,
      age:age ,
      sexuality:sexuality,
      language:language,
      ethnicity:ethnicity,
      faith:faith,
      country:'',
      typeOfPayment:typeOfPayment,
      minPrice:minPrice,
      maxPrice:maxPrice,
      appointmentFrequency:appointmentFrequency,
      timeRequirement:timeRequirement,
      availabilityTo:availabilityTo,
      availabilityFrom:availabilityFrom
    };

    createNewPost(jobPostObj, db)
      .then(response => {
        res.send({response: response,
          message:"saved data"});
        return;
      })
      .catch(e => res.send("jobpost error"));
  });

  return router;
};