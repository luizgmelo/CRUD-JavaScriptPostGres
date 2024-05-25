import * as readline from "readline";

console.log("=".repeat(10), "Welcome to my library", "=".repeat(10));
console.log("Menu Options");
console.log("1. Add a new book");
console.log("2. List books");
console.log("3. Update a book");
console.log("4. Delete a book");
console.log("Your option:");

const option = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

option.question("Your option:", opt => {

  switch (opt) {
    case "1":
      console.log("adding a new book");
      break;
    case "2":
      console.log("listing all books");
      break;
    case "3":
      console.log("updating a book");
      break;
    case "4":
      console.log("deleting a book");
      break;
    default:
      console.log("Invalid Option");
  }

  option.close();
});
