// Getting Key names from Object

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

// for...in loop
// Getting key using for in loop
console.log("Getting Keys");
for (let saifkey in personDetail) {
  console.log(saifkey);
}
// Getting all values using for in loop
console.log('Getting Values');

for (let saifvalue in personDetail) {
  console.log(personDetail[saifvalue]);
}
