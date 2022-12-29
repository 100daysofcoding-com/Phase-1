const personDetail = {
  firstname: "Suhail",
  lastname: "Roushan",

  age: 20,
  isAlive: true,

  number: 9618211626n,
};

// 1.Access
// 2.Add
// 3.Update
// 4.Delete

// Access keys using dot method
// console.log(personDetail.number);
// // Access keys using square brackets
// console.log(personDetail["number"]);

// console.log(personDetail.address.zip);
// console.log(personDetail["address"]["zip"]);

personDetail.address = { area: "Hyderabad", zip: 500045 };
console.log(personDetail);
