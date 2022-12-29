const x = 9007199254740991; // 2 power 53 - 1
// const y = 9007199254740991;


// expected output: 9007199254740991
// -9007199254740991; to + 9007199254740992
console.log(x + 1); 
console.log(x + 2);
// expected output: 9007199254740992

// console.log(x === y);
// expected output: true


// BigInt


let b1 = 90071992547409; // bigint
let b2 = 1; // number
// console.log();

console.log(typeof b1);
console.log(typeof b2);

console.log(b1 + b2);


