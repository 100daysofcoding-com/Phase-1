//  Task
// 1. SquareRoot(64)  ==> 8 // Math.sqrt
// 2. Numbergenerator(1,10) 1 2 3 4 5 6 7 8 9 10
// 3. Power(8) ====> 64 ...Math.pow(a,b )
// 4. Names("Suhail","Roushan") ==> My First Name is Suhail , Second Name is Roushan
// 5. IsEven(2) ==> Yes Even Number
//    IsEven(5) ===> Odd Number

function Square(num) {
  console.log(Math.sqrt(num));
}

// Square(25);

//  a power b
function Power(a, b) {
  console.log(Math.pow(a, b));
}

// Power(2, 3);

function numberGenerator(start, end) {
  for (let i = start; start <= end; start++) {
    console.log(start);
  }
}

numberGenerator(9, 10);

function nameGenerator(firstname, lastname) {
  console.log(`My FirstName is ${firstname}`);
  console.log(`My LastName is ${lastname}`);
  console.log(`My Full Name is ${firstname} ${lastname}`);
}

nameGenerator("Suhail", "Roushan");

function IsEven(num) {
  if (num % 1 == 0) {
    console.log(`Number is Even which is ${num}`);
  } else {
    console.log(`Number is Odd which is ${num}`);
  }
}

IsEven(2)