const bcrypt = require('bcrypt');

//function to validate login information 
const loginCustomer = function(db,email) {
  const query = {
    text: `SELECT * FROM users WHERE email = $1` ,
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
    .catch((err) => err);

};

module.exports = { loginCustomer };
