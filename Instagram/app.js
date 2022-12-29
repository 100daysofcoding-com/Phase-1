console.clear();
import readline from "readline-sync";
let a;
let b;
let c;
let d;
let press;
let y;
let n;
let price = 600;
let gst = 20;
let gsta = (price * gst) / 100;

console.log(
  "*********************************************************************************"
);
console.log("*\t \t \t \t \t \t \t \t \t \t*");
console.log("*\t \t \t WELCOME TO JS RESTAURANT\t \t \t \t*");
console.log("*\t \t \t    Js Engine, Browser \t \t \t \t        *");
console.log("*\t \t \t \t ES2022\t \t \t \t \t \t*");
console.log("*\t \t \t \t \t \t \t \t \t \t*");
console.log(
  "*********************************************************************************"
);

setTimeout(() => {
  console.log(" \t \t  \t Todays Special Menu includes \t \t");
  console.log(
    "--------------------------------------------------------------------------------"
  );
}, 3000);

console.log("");

setTimeout(() => {
  console.log("\t \tS.NO    \t DISH \t \t \t CODE \t\tPrice");
  console.log("\t \t 1.\tARRAYbiata Pasta     \t\t Array \t\t200/-");
  console.log("\t \t 2.\tOBJECTedoctopus      \t\t Object\t\t200/-");
  console.log("\t \t 3.\tMETHODates cake        \t\tMethod \t \t200/-");
  console.log("\t \t 4.\tSTRINGonion Rice cake        \tString\t\t200/-");
  console.log("\t \t 5.\tSPLICE cream            \tSplice \t\t200/-");
  console.log("\t \t 6.\tCOrNST Grilled      \t\t Const\t \t200/-");
  console.log("\t \t       \t \t");
  console.log("\t \t       \t \t");
}, 5000);
setTimeout(() => {
  a = readline.question("Enter the code to order the dish: ");
  b = readline.question("Enter the code to order the dish:");
  c = readline.question("Enter the code to order the dish: ");
}, 9000);

setTimeout(() => {
  console.log("Would you like to order more?");
  press = readline.question("Press y or n: ");
  if (press == "y") {
    console.log("You are already fat, stop eating soo much");
  } else if (press == "n") {
    console.log("Thank you for ordering, your food will be served soon");
  } else {
    console.log("Thank you for ordering, your food will be served soon");
  }
}, 12000);

setTimeout(() => {
  console.log(`Your Total Bill without gst is :  ${price}`);
  console.log(`Your Bill including gst is : ${price + gsta}`);
}, 16000);
