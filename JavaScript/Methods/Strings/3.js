/*
let arr = [1,2,3,4,5]
forEach is an Array Method(fun)  
// Input Accept a Function
// It calls the function on each element in the array
// For each does not apply for empty elements
// it does not return the value to store for other variables


*/

// let arr = [1, 2, 3, 4];

// arr.forEach(even);

// function even(num) {
//   if (num % 2 == 0) {
//     console.log(num);
//   } else {
//     console.log("Its an odd");
//   }
// }

// Fat Arrow or Arrow Function

// let even = (num) => {
//   if (num % 2 == 0) {
//     console.log(num);
//   } else {
//     console.log("Its an odd");
//   }
// };

// // Annnomymouss Function
// console.time()
// // arr.forEach((x) => (x % 2 == 0 ? console.log("Even") : console.log("Odd")));
// console.timeEnd()

// console.log(arr.forEach((x) => x).fill("Suhail"));
// console.log(arr.map((x) => x).fill("Suhail"));

let arr = [1, 2, 3, 4];

arr.forEach((x) => console.log(x * 2));
