// splice() : Array Element to Chnage or Update Or Delete till Specific Value

const prime = [2, 3, 5, 7, 9, 11, 13, 15];
//             0  1  2  3  4  5   6   7
// change / update
console.log(prime);

prime.splice(0, 1, 100);

// 1st parameter ==> delete that index value 9 delete
// 2nd parameter ===> From delete how many elements you want to delete
// 3rd parameter ===> After Deleting what you want to update the value 13
console.log(prime);

// Splice
// ForEach
// Map
