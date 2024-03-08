// Divide and conqure rule
// Find the index of a given no in a sorted array 7
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] -> index 6 output

// min ->0 element ->1
// max ->arr.length -1 element ->15
// mid index = (min+max)/2 -> (0+14)/2 ->7 = 8 element
// if array[minindex]<number(7)

function binarySearch(array, num) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (array[mid] < num) {
      min = mid + 1;
    } else if (array[mid] > num) {
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

const result = binarySearch(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  7
);

console.log(result);

// Time complicity O(log(n))
