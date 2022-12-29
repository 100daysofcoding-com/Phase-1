// finally
let a = 1 , b = 2;
try {
    console.log(a+b); // 3
    console.log(c);
} catch (error) {
    console.log("Error Message: ", error);
} finally {
    // codes that get executed anyways
    // even if there is a error it gets exectued even if there is no error it gets exectue
    console.log("Hello I will print anyway bruh");
}
