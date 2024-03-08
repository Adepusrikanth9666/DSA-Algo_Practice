// Sorting Using Recursion Function
// [2,3,1,4] -> by default case
// [2,1,3,4]->case 1
// [1,2,3,4] ->Final output

let i = 0;
let j = 1;
let myArr = [1, 2, 31, 24, 5];
let myList = [];

function isSorted(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

function sortRecursive(array) {
  if (isSorted(array)) {
    myList = array;
    return;
  } else if (array[i] < array[j]) {
    i++;
    j++;
    sortRecursive(array);
  } else {
    [array[i], array[j]] = [array[j], array[i]];
    i = 0;
    j = 1;
    sortRecursive(array);
  }
}
sortRecursive(myArr);
console.log(myList);
