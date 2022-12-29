const m6 = [1, 2, 3, 4, 4, 4, 5];
//
// // console.log(m6);

for (let i = 0; i <= m6.length; i++) {
  if (m6[i] == 4) {
    m6.splice(i, 1); // 4 // 5 // 6

    // first parameter ==> the element which u want to delete
    // second parameter ==> the no.of elements which u want to delete

    i--; // Index Position
  }
}

console.log(m6, "Deleted Using splice method with for loop");