/*
Exception Handling

Any error is an exception

try catch finally throws\

Type of Errors

    1) Syntax Error
    2) Runtime Error



*/

    // try {
    //     // main code is inside the try block
    // } catch (error) {
    //     // the catch block handles the error with giving you the catch statements
    // }

    let a = 1 , b = 2;

try {
    console.log(a+b); // 3
    console.log(c); // undefined
} catch (error) {
    console.log("Error Message: ", error);
}

    