const prompt = require('prompt-sync')();
const client = require("./database.js");

console.log("=".repeat(10), "Welcome to my library", "=".repeat(10));
console.log("Menu Options");
console.log("1. Add a new book");
console.log("2. List books");
console.log("3. Update a book");
console.log("4. Delete a book");

let opt = prompt("Your option:")

switch (opt) {
  case "1":
    client.create(prompt("Type the name of the book: "));
    break;
  case "2":
    client.list();
    break;
  case "3":
    let oldBookName = prompt("Enter the old name of the book:");
    let newBookName = prompt("Enter the new name of the book:");
    client.update(oldBookName, newBookName);
    break;
  case "4":
    client.delete(prompt("Type the name of the book: "));
    break;
  default:
    console.log("Invalid Option");
}

