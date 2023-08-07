let arr=[1,2,3,4,1,2,3,4,1,2,3,4]
let n=1
let Arr=(a,n)=>{
let count=0
if(typeof(n)!=="number"||!Array.isArray(arr)){
    return "Undefined"
}
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===n){
            count++
        }
    }
    return count
}
console.log(Arr(arr, n));


































// function searchCount(arr, number) {
//     let count = 0;
  
//     if( typeof(number) != "number" || number=="" || number == undefined,null || Array.isArray(arr)=="false")
//     {
//         return "plzz enter a valid input";    
//     }
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === number) {
//         count++;
//       }
//     }
//     return count;
//   }
  
//   const arr = [1,2,5,9,4,6,3,5,8,7,5,3,5,6,,5,,3,5,,4,6,,3,4,5,6,8,2];
//   const number = "" ;
//   console.log(searchCount(arr, number));






























// function searchCount(arr,num) {
//     let count=0;
//     if(num=="" || typeof(num) != "number" || Array.isArray(arr)=="false")
//     {
//         return "Enter Valid Input";    
//     }
//     else{
//         for(let i=0;i<=arr.length;i++)
//     		{
//        		 if(num==arr[i])
//         		{
//             count+=1;
//         		}
//     		}
//     if(count!=0)
//     {
//         return count;
//     }
//     else {
//         return -1;
//     }
// }
// }
// console.log(searchCount(1,1));