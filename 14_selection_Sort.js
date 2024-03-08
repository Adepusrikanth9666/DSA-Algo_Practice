// Selecion Sort
// [0,2,34,22,10,19]

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}
let result = selectionSort([0, 2, 34, 22, 10, 19]);
console.log(result);

// Time complixty O ( n 2 )
