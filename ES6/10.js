const person = {
    name: "Suhail",
    age: 20,
    isAlive: true,
    email: "suhail@gmail.com"

}

// I want a variable of all key names with there values

// console.log(name); ==> Suhail

// let name = person.name;
// console.log(name);

let { name, age, email, isAlive } = person
console.log(name);
console.log(age);
console.log(email);
console.log(isAlive);




