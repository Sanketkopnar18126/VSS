const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Legacy way
const results = [];

// for (let i = 0; i < arr.length; i++) {
//   const currentElem = arr[i];
//   if (currentElem % 2 === 0) {
//     results.push(currentElem);
//   }
// }

const result = arr.filter((item) => item % 2 === 0);

/* const result2 = arr.filter((item) => {
  return item % 2 === 0;
}); */

console.log(results);