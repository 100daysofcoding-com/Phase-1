// Global Scope
var a = 10;
let b = 20;
const c = 30;

function a1() {
  console.log(a, b, c);
}
a1();

{
  console.log(a, b, c);
}

console.log(a, b, c);
