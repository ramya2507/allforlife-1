const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const { getUserWithEmail, addUser } = require('../util/customerHelpers');



//mock data
const users = [
  { id: 1,
    name: 'Kelechi Obikaonu',
    email: 'kelechipauline@gmail.com',
    pasword: 'lighthouselabs'
  },
  { id: 2,
    name: 'Ramya Adimoolan',
    email: 'ramya@gmail.com',
    pasword: 'lighthouselabs'
  },
  { id: 3,
    name: 'Fatima Fatima',
    email: 'fatima@gmail.com',
    pasword: 'lighthouselabs'
  },
  { id: 4,
    name: 'Deepthy Sharon',
    email: 'deepthy@gmail.com',
    pasword: 'lighthouselabs'
  },
  { id: 5,
    name: 'Kelechi Mary',
    email: 'pauline@gmail.com',
    pasword: 'lighthouselabs'
  },
  { id: 6,
    name: 'Williams Greg',
    email: 'greg@gmail.com',
    pasword: 'lighthouselabs'
  },
  { id: 7,
    name: 'Chimuru pauline',
    email: 'chi@gmail.com',
    pasword: 'lighthouselabs',
  },
];

//api routes

module.exports = (db) => {
  
  router.get('/', async(req, res) => {
    try {
      const allUsers = await db.query(`SELECT * FROM customers`);
      res.json(allUsers.rows);
    } catch (e) {
      console.log(e.message);
    }
  });
  
  router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
      res.status(404).send("this user does not exist");
    }
    res.send(user);
  });
  
  // router.post('/', async(req, res) => {
  //   const { prefix, firstName, lastName, email, password } = req.body;
  //   try {
  //     await db.query(`
  //     INSERT INTO customers (prefix, first_name, last_name, email, password)
  //     VALUES($1, $2, $3, $4, $5)
  //     RETURNING *;
  //     `, [prefix, firstName, lastName, email, password]);
  //     res.redirect('/api/users');
  //   } catch (e) {
  //     console.error(e.message);
  //   }
  // });

  //registration route

  router.post('/', (req, res) => {
    const { prefix, firstName, lastName, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 12);
  
    if (!firstName || !lastName || !email || !password) {
      res.send("You are missing a field");
      return;
    }
    const userData = {
      prefix: prefix,
      firstName: firstName,
      lastName:lastName,
      email:email,
      password: hashedPassword
    };
    getUserWithEmail(email, db)
      .then(response => {
        if (response) {
          res.send({error: "An account with this email exist"});
          return;
        }
        addUser(userData, db).then(newUser => {
          console.log(newUser);
          // req.session['userID'] = newUser['id'];
          res.send({message: "registered new user" });
          return;
        })
          .catch(e => res.send("error"));
          
      })
      .catch(e => res.send(e));
  });
  return router;

};




