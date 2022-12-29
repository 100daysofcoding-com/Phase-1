let a = 1;
let b = 2;

try {
  // throw
  // console.log + return
  // return console.log(a+b);

  throw console.log(a + b);

  //   throw c;
} catch (error) {
  new Error("I am Error");
} finally {
  console.log("I am going to Exceute");
}
