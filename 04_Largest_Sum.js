// [1,2,3,4,5,6,7,8] => total elements - 10
// count largest sum of consecutive Digits

function findLargest(array, number) {
  if (number > array.length) {
    throw new Error("Number is not greater then array");
  } else {
    let max = 0;
    for (let i = 0; i < array.length - number + 1; i++) {
      let temp = 0;
      for (j = 0; j < number; j++) {
        temp += array[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
}

const result = findLargest([1, 2, 3, 4, 5, 6, 7, 8], 4);
console.log(result);
