const addNums = (a, b) => {
    console.log("a,b", a, b);
    return a + b;
  };
  
  const addNumsV2 = (a = 100, b = 100) => {
    console.log("a,b", a, b);
    return a + b;
  };
  
  console.log(addNumsV2());
  console.log(addNumsV2(20));