// Helper Recursion Function
// [1,2,3,4,5,6,7,8,9,10]
// [1,3,5,7,9] -> output
// number%2!==0 ->odd

function odd(array) {
  let result = [];
  function helperRecursive(inpurArray) {
    if (inpurArray.length == 0) {
      return;
    }
    if (inpurArray[0] % 2 !== 0) {
      result.push(inpurArray[0]);
    }
    helperRecursive(inpurArray.slice(1)); // recursive call
  }
  helperRecursive(array); // first call
  return result;
}

let result = odd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result);
