/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const frequencyMap = {};
    
    let start = 0;
    let maxFreq = 0;
    let longestSubstring = 0;
    
    for (let end = 0; end < s.length; end++) {
        frequencyMap[s[end]] ||= 0;
        frequencyMap[s[end]] += 1;
        
        maxFreq = Math.max(maxFreq, frequencyMap[s[end]]);
        
        const valid = (end + 1) - start - maxFreq <= k;
        if (!valid) {
            frequencyMap[s[start]] -= 1;
            start++;
        }
        
        longestSubstring = (end + 1) - start;
    }
    
    return longestSubstring;
};