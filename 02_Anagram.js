// Anagram string problem
// "hello" -> "llheo"

// Conditions:-
// Check the length for both the strings
// String "Hello"
// {h:1,e:1,l:2,o:1}
// By using the map {}

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  let count = {};
  for (let letter of str1) {
    count[letter] = (count[letter] || 0) + 1;
    // console.log(count);
  }
  for (let item of str2) {
    if (!count[item]) {
      return false;
    }
    count[item]--;
  }
  return true;
}

console.log(isAnagram("hello", "llohe"));

// linear time complexity O(2*n) === O(n)
