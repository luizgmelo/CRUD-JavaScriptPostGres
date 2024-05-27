const { Client } = require("pg");
const option = require("./index");

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
  create:function(bookName) {
    client.query(`INSERT INTO books (name) values ('${bookName}')`, (err, res) => {
      if (!err) {
        console.log("Book added successfully!");
      } else {
        console.log(err);
      }
    })
  },
  update:function(oldBookName, newBookName) {
    client.query(`UPDATE books SET name = '${newBookName}' WHERE name = '${oldBookName}' `, (err, res) => {
      if (!err) {
        console.log("Update has sucessfully!");
      } else {
        console.log(err);
      }
    })
  },
 };

