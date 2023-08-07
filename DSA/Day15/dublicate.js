// const arr = [1, 2, 3, 0,3,2];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] == arr[j]) {
//       arr[j] = undefined;
//     }
//   }
// }
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] != undefined) {
//     console.log(arr[i]);
//   }
// }

let str = "IamUserIamUser";
// let Arr=Array.from(str)
// console.log(arr)

let arr = (n) => {
  let Arr = n.split("");
  console.log("arr", Arr);
  for (let i = 0; i <= Arr.length; i++) {
    for (let j = i + 1; j <= Arr.length; j++) {
      if (Arr[i] === Arr[j]) {
        Arr.splice(j, 1);
      }
    }
  }
  return Arr;
};
console.log(arr(str));

// let arr = (n) => {
//   let Arr = Array.from(n);

//   for (let i = 0; i < Arr.length; i++) {
//     for (let j = i + 1; j < Arr.length; j++) {
//       if (Arr[i] === Arr[j]) {
//         Arr.splice(j, 1);
//       }
//     }
//   }

//   return Arr;
// };

// let str = "IamUserIamUser";
// console.log(arr(str));
