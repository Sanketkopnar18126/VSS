
const arr = [1, 3, -4];


const arrSum = (romeshKaArray) => {
    let sum = 0;

  for (let i = 0; i < romeshKaArray.length; i++) {
    
    //sum = sum + romeshKaArray[i];
    sum =sum- romeshKaArray[i];
  }

  return sum;
};

console.log(arrSum(arr));
