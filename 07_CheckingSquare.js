// Checking Square in another array
// array1=[1,2,3,4] ,array2 = [1,9,4,16]

// condition:

function squareCheck(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    let isSquare = false;
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] * array1[i] === array2[j]) {
        isSquare = true;
      }
      if (j === array2.length - 1) {
        if (!isSquare) {
          return false;
        }
      }
    }
  }
  return true;
}

const result_1 = squareCheck([1, 2, 3, 4], [1, 9, 4, 16]);
console.log(result_1);

// TIME   cOMPLIXITY - O(n^2)
