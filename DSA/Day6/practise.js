function printLoop(num) {
    let result = "";
    for (let i = 1; i <= num; i++) {
      // Add in forward direction
      result = result + " " + i; // result = result + i
  
      // result = "" + 1;
      // result = "1" + " " + 2;
      // result = "12" + 3;
      // result = "123" + 4;
      // result = "1234" + 5;
      // result = "12345"
  
      //Add in reverse order
      //result = i + result;
    }
  
    return result.trim();
  }
  
  console.log(printLoop(12));
  