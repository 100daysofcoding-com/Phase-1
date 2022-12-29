let arr = [10, 9, 8, 1, 2];
let empty = [];
let a, b;
function recusrsion() {
  for (let i = 0; i <= arr.length - 1; i++) {
    a = arr[i];
    b = arr[i + 1];
    if (a > b) {
      recusrsion();
      console.log(a, b);
      [a, b] = [b, a];
      empty.push([b, a]);
      console.log(empty);

      // [arr[i], arr[i + 1]] = [arr[i + 1], arr];
    }
    //   console.log(a, b);
  }
}
recusrsion(); 

// let a = 10;
// let b = 20;

// [a, b] = [b, a];

// console.log(a, b);
