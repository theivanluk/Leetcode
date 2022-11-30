/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let left = 0;
  let right = 0;
  let result = '';
  
  while (right <= s.length) {
    if (s[right] !== ' ' && s[right] !== undefined) {
      right++;
    } else {
      let r = right
      while (left < r) {
        r--
        result += s[r]
      }
      right++;
      left = right;
      result += ' ';
    }
  }
  
  result = result.slice(0, result.length - 1);
  return result;
};