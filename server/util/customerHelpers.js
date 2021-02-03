//function to get user with email from the database
const getUserWithEmail = (email, db) => {
  return db.query(`
    SELECT * 
    FROM customers
    WHERE email = $1;
  `, [email])
    .then(res => {
      return res.rows[0];
    })
    .catch(e => {
      return null;
    });
};

//function to add a new user to the database
const addUser = (userData, db) => {
  const {prefix, firstName, lastName, email, password } = userData;
  return db.query(`
  INSERT INTO customers (prefix, first_name, last_name, email, password)
    VALUES($1, $2, $3, $4, $5)
    RETURNING *;
    `, [prefix, firstName, lastName, email, password])
    .then(res => {
      return res.rows[0];
    })
    .catch(e => {
      return null;
    });
};
module.exports = {
  getUserWithEmail,
  addUser
};