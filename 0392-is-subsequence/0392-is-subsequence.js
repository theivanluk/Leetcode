/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sIndex = 0;
    
    for (let i = 0; i < t.length; i++) {
        s[sIndex] === t[i] ? sIndex++ : null;
    }
    
    return sIndex === s.length;
};