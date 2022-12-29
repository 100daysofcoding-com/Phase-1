const arr = [
  [-1, 0],
  [1, 2],
  [3, 4],
  [5, 6],
];
//          [-1,-0,1,2,3,4,5,6]
// console.log(arr);
// arrName.flat() // Faltten
// So it converts 2Nested arrrys to 1 single array
// let output = arr.flat();
// console.log(output);
// It Removes empty values from arrays
const even = [2, 4, , 8, 10, , 14, , 18];
// //            0  1 2  3   4 5   6  7  8
// // let output = even[2]

// console.log(even);

// console.log(even.flat());

// console.log(output);

const nestedEven = [[0, 1], [1, 2], [3, 4], [, 6], [7,] ,[8,]]; // 2D 
// [1,2,3,4,5] 1D Array

let output = nestedEven.flat()
console.log(output);

