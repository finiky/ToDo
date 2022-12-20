const { Client } = require("pg");
let client = null;
async function get_db() {
  if (client !== null) {
    return client;
  }

  client = new Client({
    connectionString: "postgres://postgres:password@localhost:5432/postgres",
  });
  await client.connect();
  return client;
}
module.exports = get_db;
