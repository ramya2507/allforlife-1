const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const { getProviderWithUserName, addProvider } = require('../util/providerHelpers');

//api routes for providers

module.exports = (db) => {
  
  router.get('/info', async(req, res) => {
    try {
      const allProviders = await db.query(`SELECT * FROM providers`);
      res.json(allProviders.rows);
    } catch (e) {
      console.log(e.message);
    }
  });
  
  router.get('/:id', (req, res) => {
    const provider = providers.find(u => u.id === parseInt(req.params.id));
    if (!provider) {
      res.status(404).send("this user does not exist");
    }
    res.send(provider);
  });
  
  //registration route
  router.post('/register', (req, res) => {
    const { prefix, firstName, lastName, userName, email, password, degree, aboutMe, therapy, age, ethnicity, location, profile_photo_url } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 12);
  
    if (!firstName || !lastName ||!userName ||!email || !password) {
      res.send("You are missing a field");
      return;
    }
    const providerData = {
      prefix: prefix,
      firstName: firstName,
      lastName:lastName,
      userName:userName,
      email:email,
      password: hashedPassword,
      degree:degree,
      aboutMe:aboutMe,
      therapy:therapy,
      age:age,
      ethnicity:ethnicity,
      location:location,
      profile_photo_url:profile_photo_url
    };
    getProviderWithUserName(userName, db)
      .then(response => {
        if (response) {
          res.json([]);
          return;
        }
        addProvider(providerData, db).then(newUser => {
          req.session.ProviderId = newUser.id;
          console.log(req.session.ProviderId, "user");
          res.json(newUser);
          return;
        })
          .catch(e => res.send("error"));
          
      })
      .catch(e => {
        //res.status(500).json({ error: e.message});
      });
  });
  
  //login route 
  router.post('/login', (req, res) => {
    const {userName, password} = req.body;
    getProviderWithUserName(userName, db)
      .then(user => {
        if (!user) {
          res.json([]);
        } else if (!bcrypt.compareSync(password, user['password'])) {
          res.json([]);
          return;
        }
        req.session.providerId = user.id;
        console.log(req.session.providerId);
        res.json(user);
      })
      .catch(e => {
        if (e) {
          res.status(401).json({ error: e.message });
        }
      });
  });
  
  return router;
};

