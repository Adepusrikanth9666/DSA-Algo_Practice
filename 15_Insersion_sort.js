// We will learing the INsertion sort

// [8,2,4,1,3]
// we will start from the 2nd position

const inserstionSorted = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let curr = i;
    let j = i - 1;
    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }
  }
  return arr;
};

let result = inserstionSorted([8, 2, 4, 1, 3]);

console.log(result);
// Time complixty O ( n 2 )
