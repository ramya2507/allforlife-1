const express = require('express');
const router = express.Router();


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
  
  router.post('/', (req, res) => {
    const user = {
      id: users.length + 1,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    };
    users.push(user);
    res.send(users);
  });

  return router;

};




