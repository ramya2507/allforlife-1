const pg = require('pg');
// load .env data into process.env
require('dotenv').config();

const connectionString = `postgres://development:${process.env.DB_USER}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable`;

const client = new pg.Client({
  connectionString: connectionString,
})
/*const client = new pg.Client({
  user:"development",
  password: "development",
  database: "allforlife",
  host: "localhost",
  port: 5432
});*/

client.connect()
.catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;