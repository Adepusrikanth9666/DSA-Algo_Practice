// Count  Unoque Numbers

//[1,1,2,3,3,4,5,6,7,8,8,9,9]

function countUnique(array) {
  if (array.length > 0) {
    let i = 0;
    for (j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("Array is Empty ");
  }
}

let result = countUnique([[1, 1, 2, 3, 3, 4, 5, 6, 7, 8, 8, 9, 9]]);
console.log(result);

// time complexity linear O(n)
