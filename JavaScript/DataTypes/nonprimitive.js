// Non Primitive Data try const 
// 1.Object ... key value .. datatype of object is object
// Object Mutable
// 2.Arrays  data 

let person = {
  name: "Suhail",
  age: 20,
  isAlive: false,
  number: 85749385,
  gender: "male",
};

// console.log(typeof person);
// console.log(person);
// console.log(person.name);
// console.log(person.age); // dot notation
// console.log(person["gender"]); // arraymethod

const suhailBank = {
  accountNumber: 9458749857498,
  fullName: "Suhail Roushan",
  bankName: "SBI",
  number: 9618211626,
  balance: 10e10,
  IFSC: "ANK9048",
};
console.log(typeof suhailBank);
console.log(suhailBank.fullName);
console.log(suhailBank["balance"]);

suhailBank.fullName = "Mohammed Riyaan";
suhailBank.age = 40;
suhailBank.balance = 5e4

console.log(suhailBank);





