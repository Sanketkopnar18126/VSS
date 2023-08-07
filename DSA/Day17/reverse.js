// let str="sanket"

// let Arr=(n)=>{
//     let newstr=Array.from(n)
//     let store=""
//     for(let i=newstr.length-1;i>=0;i--){
//         store+=newstr[i]
//     }
//     return store
// }
// console.log(Arr(str))

const checkPalindrome = (input) => {
  input = input.toLowerCase().split("");
  console.log(input);

  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] == input[j - 1]) {
        // console.log("j.length", input[j.length - 1]);
        return true;
      }
    }
  }
  return false;
  // for (let i = 0; i < input.length / 2; i++) {
  //   const currentElement = input[i];
  //   const lastElement = input[input.length - 1 - i];

  //   if (currentElement !== lastElement) {
  //     return false;
  //   }
  // }

  // return true;
};
console.log(checkPalindrome("madam"));

//   function checkPallindrome(str){
//     let res = "";
//     for(let i=str.length-1;i>=0;i--){
//       res = res+str[i]
//     }
//     if(res === str){
//       return true;
//     }
//     return false;
//   }
