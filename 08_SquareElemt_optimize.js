// Checking Square in another array
// array1=[1,2,3,4] ,array2 = [1,9,4,16]

// optimized solution

function checkSquare(array1, array2) {
  let map1 = {};
  let map2 = {};
  for (let item of array1) {
    // n times
    map1[item] = (map1[item] || 0) + 1;
  }
  for (let item of array2) {
    // n times
    map2[item] = (map2[item] || 0) + 1;
  }
  for (let key in map1) {
    // n times
    if (!map2[key * key]) {
      return false;
    }
    if (map1[key] !== map2[key * key]) {
      return false;
    }
  }
  return true;
}

let result = checkSquare([1, 2, 3, 1], [1, 4, 1, 9]);
console.log(result);
// time complexity O(n)
// Linear
