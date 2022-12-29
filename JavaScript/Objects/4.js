// To Check If a key Exist Or Not In Object

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
  collegeArea: "KaliMandir",
  saif:"Student"

};

console.log("Suhail" in personDetail.college);
