/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if (s.length < p.length) return [];
    
    const sCount = new Array(26).fill(0);
    const pCount = new Array(26).fill(0);
    const result = [];
    
    function getCharIndex(letter) {
        return (letter).charCodeAt(0) - ('a').charCodeAt(0);
    }
    
    function isEqual(count1, count2) {
        for (let i = 0; i < 26; i++) {
            if (count1[i] !== count2[i]) return false;
        }
        return true;
    }
    
    for (let i = 0; i < p.length; i++) {
        pCount[getCharIndex(p[i])]++;
        sCount[getCharIndex(s[i])]++;
    }

    
    let lag = 0;
    let lead = p.length;
    
    while (lead < s.length) {
        if (isEqual(sCount, pCount)) result.push(lag);
        sCount[getCharIndex(s[lag])]--;
        sCount[getCharIndex(s[lead])]++;
        lag++;
        lead++;
    }
    
    if (isEqual(sCount, pCount)) result.push(lag);
    return result;
};