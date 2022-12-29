// console.log(Math.random()*10);
// 0 to 9.9
// Math.random is a Built-in Function In JS
// Which gives Number from 0 to 1 (excluded)

// for(let i =1;i<=2;i++){
//     console.log(Math.floor(Math.random() * 10));
// }

// let x =

// for (let i = 0; i <= 2; i++) {
//   console.log(Math.floor(Math.random() * 10));
// }

function randomNumber(min, max) {
  console.log(Math.floor(Math.random() * (max - min + 1) + min));
}
// (10 - 5 + 1)+ 5
//
for (let i = 1; i <= 5; i++)
 {
  randomNumber(5, 10);
}
