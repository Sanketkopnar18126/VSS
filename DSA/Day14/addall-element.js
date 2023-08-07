const arr = [1, 2, -7, -8];
ANS=-12
/**
 * @description {Method to sum all array numbers}
 * @param {Number[]} input
 *
 * Step 1   - Create a substraction variable with 0
 * Step 2   - Iterate the array & add every element with sum variable
 * Step 3   - Return the sum
 */
const arrNegativeSubtract = (romeshKaArray) => {
  let sum = null;

  for (let i = 0; i < romeshKaArray.length; i++) {
    if (sum === null) {
      sum = romeshKaArray[i];
    } else {
      sum = sum - romeshKaArray[i];
    }
    //sum = sum === null ? romeshKaArray[i] : sum - romeshKaArray[i];
  }

  return sum;
};

console.log(arrNegativeSubtract(arr));

// if(arr[i]<0){
//     if(sum ===0){
//     sum =arr[i]
//     }else{
//     sum - =arr[i]
//     }
//     }


// const arr=[1,2,-7,-8]
// let Arr=(n)=>{
//     let sum=0
//     for(let i=0;i<=n.length;i++){
//         if(n[i]<0||n[i]>0){
//             sum+=n[i]
//         }
//     }
//     return sum
// }
// console.log(Arr(arr))