//slice         0    1   2   3   4
// const users = ['a', 'b','c','d','e',];
// slice() syntax
// const myStates = [
//     "Telagana",
//     "Delhi",
//     "Maharashtra",
//     "Odisha",
//     "Tamil Nadu",
//     "Karnataka"
// ];
// var updated = myStates.slice(1,3);
// console.log(updated);

// start = inclusive
// end = exclusive Remember This

//Splice

// const myStates = [
//         "Telagana",
//         "Delhi",
//         "Maharashtra",
//         "Odisha",
//         "Tamil Nadu",
//         "Karnataka"
//     ];           0    1   2   3   4
    const users = ['a', 'b','c','d','e',];

    var check = users.splice(1,3, "Hi", "Bye");
    // console.log(check);
    console.log(users);