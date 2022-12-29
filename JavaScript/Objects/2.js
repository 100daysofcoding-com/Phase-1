// Creating Object using Object literals ==> {}
// Every Objects its Key / Value Pair
const personDetail = {
  firstname: "Suhail",
  lastname: "Roushan",
  age: 20,
  isAlive: true,
  address: {
    area: "Hyderabad",
    zip: 500045,
  },
  college: {
    collegeName: "Lords",
    collegeBranch: "CSE/IT",
    collegeRollNo: 160919754545,
  },
};

// console.log(personDetail);

// // To Access a Specific Value
// // Accessing Object Values using Dot Method
// console.log(personDetail.age);
console.log(personDetail.firstname);
console.log(personDetail.address.area);
console.log(personDetail.lastname);
// // Accessing Object Value Using Array Method
// console.log("Arrray Method using in Objects");

console.log(personDetail["firstname"]);
console.log(personDetail["address"]["area"]);
console.log(typeof personDetail);

// // Updating Object Values Using Dot Method

// personDetail.age = 21;
// personDetail.firstname = "Mohammed";
// personDetail.lastname = "Riyaan";
// console.log(personDetail.age);
// console.log(personDetail);

// // Adding

// personDetail.gender = "Male";
// console.log(personDetail);

// personDetail.books = "Harry Potter";
// console.log(personDetail);

// // Deleting KeyValue Using Delete Keyword
// delete personDetail.gender;
// delete personDetail.books;
// delete personDetail.college.collegeName;
// delete personDetail.address;
// console.log(personDetail);

// Access = object.key
// Add = object.newkey = new value
// Update  = object.keyupdate = updating value
// Delete = delete object.key

const person = {
  fname: "Syed",
  lname: "Ahmed",
  age: 20,
};
// Access
console.log(person.fname);
console.log(person.lname);

// Add

person.gender = "Male";
console.log(person);

// Update

person.lname = "Suhail";
person.age = 24;
console.log(person);

// delete
delete person.gender;
console.log(person);

console.log("firstname" in person);
