// Find teh maximum occurinng character in given string?

// Hello World
// output ->L(more occurance)

function maxOccurance(str) {
  const map = {};
  str.split("").forEach((element) => {
    map[element] = (map[element] || 0) + 1;
  });
  let max = 0;
  let char = str[0];
  for (let val in map) {
    if (map[val] > max) {
      max = map[val];
      char = val;
    }
  }
  return char;
}
let result = maxOccurance("Hello World");
console.log("The most Occurance char is :", result);
