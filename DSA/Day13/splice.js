const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * @description - It's a method to mutate or affect the main array
 * - First argument - Start index
 * - Second Argument - delete Upto number
 * - Third Argument - New Data
 */

const result = arr.splice(2,6);
// result = [3, 4, 5, 6]
// arr = [1, 2, 7, 8, 9]


console.log("Result: ", result);
console.log("ARR: ", arr);
