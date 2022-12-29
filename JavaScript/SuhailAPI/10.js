// JavaScript Synchronous

console.log("I am 1");

async function second() {
  await setTimeout(() => {
    console.log("I am 2");
  }, 1000);
}

await second();

console.log("I am 3");
console.log("I am 4");
