function addSum(a, b) {
  console.log(a + b);
}

addSum(2, 6, 6);

function sub(a, b) {
  console.log(a - b);
}

sub(5, 2);

multiply(8, 2);

function multiply(a, b) {
  console.log(a * b);
}


// new Date()

// console.log(new Date());

addSum(5, 5);

// -b+- sqrt b2 -4ac / 2a
// ax2+bx+c
// 6

function quadratic(a, b, c) {
  let num1,num2;
  let deno;
  num1 = -b + Math.sqrt(b * b - 4 * a * c);
  num2 = -b - Math.sqrt(b * b - 4 * a * c);

  deno = 2 * a;
  let x1 = num1 / deno;
  let x2 = num2 / deno;
 
  console.log(x1,x2);
}

quadratic(1, 2, -15);
