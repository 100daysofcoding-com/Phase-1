let s1 = Symbol("Hello"); // Call Stack Hello ... 74598479
let s2 = Symbol("Hello"); // Call stack Hello ...74895748
let s5 = Symbol("Hello")
console.log(s5 == s2); // false


let s3 = "Hello"
let s4 = "Hello";
console.log(s3 == s4);

