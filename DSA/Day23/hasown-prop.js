const occurenceCount = (input) => {
  const mapping = {};

  for (let i = 0; i < input.length; i++) {
    const chiragKiKey = input[i];

    if (mapping.hasOwnProperty(chiragKiKey)) {
      mapping[chiragKiKey] = mapping[chiragKiKey] + 1;
      //mapping[1] = 1 + 1;
    } else {
      mapping[chiragKiKey] = 1;
      //mapping[1] = 1;
    }
  }

  return mapping;
};








































// let Arr = [1, 2, 2, 4, 3, 4, 1, 3, 4, 6, 1, 5];

// let countNumbers = (input) => {
//   let countMap = {};

//   for (let i = 0; i < input.length; i++) {
//     let number = input[i];
//     console.log(number)
//     if (countMap[number]) {
//       countMap[number] += 1;
//     } else {
//       countMap[number] = 1;
//     }
//   }

//   return countMap;
// };

// console.log(countNumbers(Arr));



























