// 6 Ways to Remove Elements From A JavaScript Array -
//  Plus How to Safely Clear JavaScript Arrays

// console.log("------------------------");

const m1 = [1, 2, 3, 4, 5, 6];
// console.log(m1);

// 1. Removing Elements From Last
// m1.pop();
// console.log(m1, "Deleted Using pop() Method");

// // // 2.Removing Elements Using .length

// console.log("------------------------");

// const m2 = [1, 2, 3, 4, 5, 6];
// console.log(m2);

// m2.length = 5;
// console.log(m2, "Deleted Using length Method");
// console.log("------------------------");

// const m3 = [1, 2, 3, 4, 5, 6];
// console.log(m3);
// m3.shift();
// console.log(m3, "Deleted Using shift() Method");
// console.log("-----------------------------------------------------------");

const m4 = [1, 2, 3, 4, 5];
// //         0   1  2  3  4
console.log(m4);

delete m4[0];
delete m4[1];
delete m4[4];

// console.log(m4);

// console.log(m4.flat(), "Deleted Using delete operator and faltted");
// console.log("---------------------------------------------------------");

// let m5 = [1, 2, 3, 4, 5];
// console.log(m5);

// m5 = [];
// console.log(m5, "Deleted By Assinging an Empty Array");
// console.log("---------------------------------------------------------");

const m6 = [1, 2, 3, 4, 4, 4, 5];
// //
// // // console.log(m6);

// for (let i = 0; i <= m6.length; i++) {
//   if (m6[i] == 4) {
//     m6.splice(i, 1); // 4 // 5 // 6

//     // first parameter ==> the element which u want to delete
//     // second parameter ==> the no.of elements which u want to delete

//     i--; // Index Position
//   }
// }
// console.log(m6, "Deleted Using splice method with for loop");
