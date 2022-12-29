// JavaScript Synchronous

// console.log("I am First");
// console.log("I am Second");
// console.log("I am Third");

// JavaScript Asynchronous

// Timer Function : If u want to run the code at a specific time then use timer function

// setTimeout // setInterval

// setTimeout accepts a Function and Time
// setTimeouts accepts Time in MilliSeconds

// 1000 Milliseconds
// setTimeout(() => {
//   console.log("I am From ");
// }, 1000);

// Normal Function
function names() {
  console.log("I am From Name Function In SetTimeOut");
}

// Normal Function in SetTimeout
setTimeout(function names() {
  console.log("I am From Name Function In SetTimeOut");
}, 5000);

// Normal Function With Just name
setTimeout(names, 4000);



