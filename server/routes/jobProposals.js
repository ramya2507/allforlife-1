const express = require('express');
const router = express.Router();

const { createNewProposal } = require('../util/jobProposalsHelpers');

//api route
module.exports = (db) => {

  //api route for new job posting

  router.post('/', (req, res) => {
    console.log(req.body)
   const { providerId, jobPostingId, description,price ,availabilityDays,
        availabilityFrom, availabilityTo } = req.body;
    const jobProposalObj = {
        providerId,
        jobPostingId,
        description,
        price,
        availabilityDays,
        availabilityFrom,
        availabilityTo
    };
 
    createNewProposal(jobProposalObj, db)
      .then(response => {
        res.json(response);
      })
      .catch(e => res.json("jobproposal error"));
      
  });





  return router;
};