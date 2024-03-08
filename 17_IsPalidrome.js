// How to check the given string is palidrome or not..?

/*
Examples:
dad --> dad ->true
mom -> mom ->true
level -> level ->true
noon -> noon  -> true
ajay-yaja -> false


*/
// CASE 1:

function isPalidromeWithMethods(str) {
  let reverseStr = str.split("").reverse().join("");
  return str === reverseStr;
}

// let result = isPalidromeWithMethods("level");

// console.log(result);

// case 2

function isPalidrome(str) {
  let newStr = str.toLowerCase();
  let left = 0;
  let right = newStr.length - 1;

  while (left < right) {
    if (newStr[left] !== newStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

let output = isPalidrome("ledvel");
console.log(output);
