//  for loop ==> Number 
// for in loop ==> Objects
// for of loop ==> Arrays


let arr = [1, 2, 3, 4, 5, 6, 7]

// for (let data of arr) {
//     console.log(data);

// }


let obj1 = {
    name: 'Suhail',
    age: 20
}

// Keys and Values

for (let keys in obj1) {
    // console.log(keys);
    console.log(keys,obj1[keys]);
    

}


