const { Router } = require('express')
const { response } = require('express');
const express = require('express');
const router = express.Router();

const { createNotification } = require('../util/notificationHelper') 

module.exports = (db) => {

  router.post('/:id', (req, res) => {
    createNotification(req.params.id,db)
    .then(response => res.status(200).json(response))
    .catch(e => res.status(400).json({message:"Error"}))
  })

  return router;

}