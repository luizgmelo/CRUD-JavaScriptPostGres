const { Client } = require("pg");
const readline = require("readline");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "123",
  database: "postgres"
});

client.connect();

module.exports = {
  list:function() {
    client.query(`Select * from books`, (err, res) => {
      if (!err) {
        console.log(res["rows"]);
      } else {
        console.log(err);
      }
    })
  },
};