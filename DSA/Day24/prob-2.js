// const nums = [1, 2, -1, 2, 1, 6, 3, 7, -9, -1];
const nums = [1, 10, 7, 2, 16, 10, 20];
/**
 * @description Method to find two sum pair
 * @param {Numer[]} arr
 * @param {Numer} k
 * @returns {Number[]}
 */
const findTwoElementPair = (arr, k) => {
  // Write code here
  const sum = k;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum === arr[i] + arr[j]) {
        return `${arr[i]} ,${arr[j]}`;
      }
    }
  }
};

console.log(findTwoElementPair(nums, 3));
