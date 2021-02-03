const bcrypt = require('bcrypt');

//function to validate login information 
const loginCustomer = function(db, email, password) {
  const query = {
    text: `SELECT * FROM customers WHERE email = $1` ,
    values: [email]
  };

  return db
    .query(query)
    .then(customer => {
      if (result.rows.length && bcrypt.compareSync(password, customer.password)) {
        return customer;
      } else {
        return null;
      }
    })
    .catch( err => err);

};

//function to check email when registering
const checkEmail = function(db, email) {
  const query = {
    text: `SELECT * FROM customers WHERE email = $1;`,
    values: [email],
  };
  return db
    .query(query)
    .then(res => res)
    .catch(err => err);
};

//function to add customer to the database
const createCustomerAccount = (db, prefix, firstName, lastName, email, password) => {
  const insertQuery = {
    text: `INSERT INTO users(prefix, first_name, last_name, email, password)
    VALUES($1, $2, $3, $4, $5) RETURNING *;`,
    values: [
      prefix,
      firstName,
      lastName,
      email,
      bcrypt.hashSync(password, 10),
    ],
  };
  return db
    .query(insertQuery)
    .then(res => res)
    .catch(err => err);
};


module.exports = { loginCustomer, checkEmail, createCustomerAccount };
