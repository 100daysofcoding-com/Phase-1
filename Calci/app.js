import readline from "readline-sync";

function main() {
  console.clear();
  console.log("*******************");
  console.log("My Calculator");
  console.log("*******************");

  let a = readline.questionInt("Enter the value of a: ");
  let b = readline.question("Enter the value of b: ", {
    hideEchoBack: true,
  });

  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
  console.log(a % b);
}

main();
