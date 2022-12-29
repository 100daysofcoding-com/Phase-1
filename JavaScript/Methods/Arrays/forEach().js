// forEach()
// Calls a function for each element in an array
// forEach method does not apply for empty elements

// forEach() does not return anything
// if you try to return it will be undefined

// arrName.forEach(function)
// let numbers = [5, 4, 3, 2, 1];
// //
// numbers.forEach();

// ES4 Function
// function print(x) {
//   console.log(x); //8
// }
// print(5);
// print(4);
// print(3);
// print(2);
// print(1);

// ES6 Arrow Function

// let name = ()=> {
//     console.log("Hello");

// }

// let numbers = [1, 2, 3, 4, 5];

// // for (let i = 1; i <= numbers.length; i++) {
// //   console.log(i);
// // }

// numbers.forEach(printValues)

function printValues(x) {
  return console.log(x);
}

let num = [1, 2, 3, 4, 5];

// num.fill(100)
// console.log(num);

//           1 ==============1= 1
//           2 ==============2=2
// ==> == arrow function or return
num.forEach((x) => console.log(x * 2, "I am for each").fill(100));
// num.map((x) => console.log(x * 2));

// console.log(num.forEach((x) => x));
