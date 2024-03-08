// checking sum Zero - problem
// [-5,-4,-3,-2,0,2,4,6,8] -> sorted array
// o/p :- [-4,4]

// First Approch
function getSumPairZero(array) {
  for (let number of array) {
    for (let j = 1; j < array.length; j++) {
      if (number + array[j] === 0) {
        return [number, array[j]];
      }
    }
  }
}

let result = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

// Time complexity O(n^2)

// 2nd Approch

function findSumPair(array) {
  let left = 0;
  let right = array.length - 1;

  //   for (let i = 0; i < array.length; i++) {}
  while (left < right) {
    sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(findSumPair([-5, -4, -3, -2, 0, 2, 3, 6, 8]));

// Time Complixty O(n)
