// Longest Substring with out repeating charchter

// sliding window

function longestSubString(s) {
  let end = 0;
  let start = 0;
  let maxLength = 0;

  const Uniquecharrecters = new Set();

  while (end < s.length) {
    if (!Uniquecharrecters.has(s[end])) {
      Uniquecharrecters.add(s[end]);
      end++;
      maxLength = Math.max(maxLength, Uniquecharrecters.size);
    } else {
      Uniquecharrecters.delete(s[start]);
      start++;
    }
  }
  return maxLength;
}

let result = longestSubString("pwwkew");
console.log(result);
