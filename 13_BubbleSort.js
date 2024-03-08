// Bubble sort

const array = [2, 45, 1, 5, 9, 6, 8, 7, 11, 3];

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    console.log(i);
    let isSwaped; //optimized
    for (j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwaped = true; //optimized
      }
    }
    if (!isSwaped) {
      //optimized
      break;
    }
  }
  return arr;
}

const result = bubbleSort(array);
console.log(result);

// time complexity O(n^2)
