import readline from "readline-sync";
import color from "cli-color";

function main() {
  const red = color.xterm(15);
  const blue = color.xterm(45);
  const orange = color.xterm(202);
  const yellow = color.xterm(12);
  const pink = color.xterm(13);

  console.clear();
  console.log(blue("********************"));
  console.log(orange("Suhail Food Shop"));
  console.log(blue("********************\n"));
  console.log(pink("Welcome to Suhail Shop "));

  //   const myFoods = ["1.Chicken Biryani - ₹200", "2.Chicken Noodles - ₹150"];
  const myFoods = {
    1: "biryani",
    2: "noddles",
  };
  //   console.log(myFoods);

  //   myFoods.forEach((food) => console.log(blue(food)));

  for (let i in myFoods) {
    console.log(myFoods[i]);
  }

  let ask = readline.questionInt(
    yellow("Enter Your Food In Number Example (1,2,3) :")
  );
  let gst = 0.111111128;

  switch (ask) {
    case 1:
      console.log(
        yellow(
          `${myFoods[0].slice(0, 17)}<=== Name ==> Price ${Number(
            myFoods[0].slice(-3) + gst
          ).toPrecision(6)} `
        )
      );
      break;
    case 2:
      console.log(
        yellow(
          `${myFoods[0].slice(0, 17)}<=== Name ==> Price ${Number(
            myFoods[0].slice(-3) + gst
          ).toPrecision(6)} `
        )
      );
      break;
    default:
      main();
      break;
  }
}

main();
