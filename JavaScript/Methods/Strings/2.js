// String Methods

// 1.CharAt()

let personName = "Zaid";

// console.log(personName.charAt(2)); // Input ==> Index ===> Value

// Unicodes ASCII
// let ascciName = "ad"

// console.log(ascciName.charCodeAt(0));

// let join = "Ibrahim";
// let join2 = " Suhail"
// console.log(join.concat(join2));

// // includes()
// let message = "JavaScript is a Good Programming Language";
// console.log(message.includes("Scriptssdfdfe"));

// indexof()

// let string = "Apple Annaas";
// console.log(string.lastIndexOf("A")); // Input ==> Value ===> Index

// length()

// let data = "Suhail";
// console.log(data.length);

// repeat()

// let data = "Suhail";
// console.log(data.repeat(6));
// console.log(data.length);

// for (let i = 0; i <= data.length-1; i++) {
//   console.log(data);
// }

// replace() and replaceAll()

// let names = "Ahmed is a good boy Ahmed";

// console.log(names.replaceAll("Ahmed", "Izhan"));

// slice()

// let data = "SaifAhmed";
// Ahmed

// console.log(data);

//  0     1
// start end
//  slice
// console.log(data.slice(4, 9));

// split ==> String ==> Array
// let data = "Saffwan*Saif*Izhan*Suhail*Amina";
// console.log(data);

// console.log(data.split("*"));

// console.log(finalData[3]);
//
// let data = "Saif Ahmed";
// console.log(data.replace("Ahmed", "Suhail"));
// console.log(data);

// let data = "Ahmed is a Good Boy and Ahmed is a Cool Boy";
// let replace = data.replaceAll("Ahmed", "Suhail")
// console.log(replace);

// startswith()

// let data = "Amina is in Class";
// // console.log(data.startsWith("Amina"));

// // endsWith()

// console.log(data.endsWith("Class"));

// toLowerCase

// let data = "SuHaiL";
// console.log(data.toLowerCase());

// // toUpperCase
// console.log(data.toUpperCase());

// trim()
// // Trim is a String method which removes white spaces from start and end only
// let data = "    Saif     ";
// let data1 = "A    B      C     D";
// let data2 = "I    am     Saif";
// console.log(data.trim());
// console.log(data1.trim());
// console.log(data2.trim());

let data = ["Suhail", "Roushan", "Zaid", "Amina", "Izhan"];
data.length = 3;
console.log(data);
// Strings
/*
    > Set of Characters
    > Sequence of characters
    > Strings a primitive Data Type that are used to work with characters/text
*/

const name = "Fawaz";
const name2 = 'fawaz';
const name3 = `Fawaz`;

const name4 = new String('I am a String technically IM not a string'); // It is a way to declare a string but not recommeded

// console.log("typeof(name));
console.log(typeof(name2));
console.log(typeof(name3));
console.log(typeof(name4));