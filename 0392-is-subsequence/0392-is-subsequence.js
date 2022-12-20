/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let substring = s;
    let string = t;

    while (substring.length > 0) {
        const subLetter = string.indexOf(substring[0]);
        
        if (subLetter === -1) { return false }

        substring = substring.slice(1);
        string = string.slice(subLetter + 1);
    }

    return true;
};