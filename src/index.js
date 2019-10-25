import "./styles.css";

// let olympicRecords = {
//   athletics100Men: "Justin Gatlin",
//   athleticsLongJumpMen: "Mike Powel",
//   swimming200Men: "Michael Phelps"
// };

// olympicRecords.swimming200Men = "Loick Olawinski";
// olympicRecords.swimming200Women = "Estelle Olawinski";
// console.log(olympicRecords);

// olympicRecords.doubleOllie = "Chris Chann";
// console.log(olympicRecords.doubleOllie);

// delete olympicRecords.doubleOllie;
// console.log(olympicRecords);

// Object.keys(olympicRecords);
// Object.values(olympicRecords);

// for (let key in olympicRecords) {
//   console.log(key);
// }

//----------------------------------------------------------------------

// Iteration 1

const user1 = {
  name: "Yoann Olawinski",
  id: 9
};

// Iteration 2

const book1 = {
  title: "L'écume des jours",
  author: "Boris Vian",
  isbn: "9782253140870",
  category: "Classic Literature"
};
const book2 = {
  title: "Sommeil",
  author: "Haruki Murakami",
  isbn: "9782264055873",
  category: "Japanese Literature"
};

console.log(user1); //Ok
console.log(book1, book2); //Ok

// Iteration 3

user1.book = []; //Ok
user1.book.push(book1, book2); //Ok
console.log(user1); //Ok

// Iteration 4

const library = [];

library.push(user1); //Ok
console.log(library); //Ok

// Iteration 5

const book3 = {
  title: "Truismes",
  author: "Marie Darrieussecq",
  isbn: "9782867445279",
  category: "Modern Literature"
};

user1.book.push(book3);
console.log(user1); //Ok

// Bonus

const user2 = {
  name: "Loick Olawinski",
  id: 6
};
const user3 = {
  name: "Estelle Olawinski",
  id: 2
};

const book4 = {
  title: "JavaScript - The Good Parts",
  author: "Douglas Crockford",
  isbn: "932852405",
  category: "Coding Literature"
};
const book5 = {
  title: "JavaScript - The Definitive Guide",
  author: "David Flanagan",
  isbn: "938272472458",
  category: "Coding Literature"
};
const book6 = {
  title: "High Performance JavaScript",
  author: "Nicholas C. Zakas",
  isbn: "9454275278",
  category: "Coding Literature"
};
const book7 = {
  title: "How to be a chef",
  author: "Paul Bocuse",
  isbn: "9782264055873",
  category: "Cuisine Literature"
};

user2.book = [book7]; //Ok
user3.book = [book4, book5, book6]; //Ok
console.log(user2);
console.log(user3);

library.users = { user1, user2, user3 }; //Ok
console.log(library.users); //Ok

document.getElementById("app").innerHTML = `
<h1>Hello ${user1.name}!</h1>
<div>
What are you reading?
<br>
"${book1.title}" de ${book1.author} & "${book2.title}" de ${book2.author}
 </div>
`;
