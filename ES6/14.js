// for loop // Numbers Int Float 
// for of loop // Arrays 
// for in loop // Objects

for (let i = 0; i <= 10; i++) {
    // console.log(i);

}

let arr = [1, 2, 3, 4, 5]

for (let j of arr) {
    console.log(j);

}



const obj = {
    name: 'Suhail'
}
for (let data in obj) {
    console.log(data); // Key
    console.log(obj[data]); // Values
    console.log(`${data} ${obj[data]}`); // Key + Value

}
console.log(obj["name"]); // Square Bracket Method
console.log(obj.name); // Dot Method



// console.log(obj);
