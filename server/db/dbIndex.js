const pg = require('pg');

const client = new pg.Client({
  user:"development",
  password: "development",
  database: "allforlife",
  host: "localhost",
  port: 5432
});

client.connect().catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;