/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
//     const charCount = new Map();
    
//     for (const char of [...s]) {
//         charCount.has(char) ? 
//             charCount.set(char, charCount.get(char) + 1) : 
//             charCount.set(char, 1);
//     }
    
//     let palindromeLength = 0;
//     let hasOdd = false;
    
//     for (const [char, count] of charCount) {
//         count % 2 === 0 ? palindromeLength += count : 
//             (palindromeLength += (count - 1), hasOdd = true);
//     }
    
//     hasOdd ? palindromeLength += 1 : null
    
//     return palindromeLength;
    const charSet = new Set();
    let count = 0;
    
    for (const char of s) {
        if(!charSet.has(char)) {
            charSet.add(char)
        } else {
            charSet.delete(char);
            count += 2;
        }
    }
    
    charSet.size ? count++ : null;
    
    return count;
};