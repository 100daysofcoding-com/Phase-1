

// Fat Arrow // Arrow Function
let names = () => {
  console.log("I am From Name Function In SetTimeOut");
};

// Arrow Function in SetTimeOut
setTimeout(() => {
  console.log("I am From Name Function In SetTimeOut");
}, 2000);

// Arrow Fucntion With Variable in SetTimOut

setTimeout(names, 4000);
