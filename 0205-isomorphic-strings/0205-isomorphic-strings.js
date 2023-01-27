/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    
    const sMap = new Map();
    const tMap = new Map();
    
    let sCounter = 0;
    let tCounter = 0;
    
    for (let i = 0; i < s.length; i++) {
        let sIndex;
        let tIndex;   
        if (!sMap.has(s[i])) {
            sMap.set(s[i], sCounter);
            sCounter++;
        }
        if(!tMap.has(t[i])) {
            tMap.set(t[i], tCounter);
            tCounter++;
        }
        if (sMap.get(s[i]) !== tMap.get(t[i])) { return false };
    }
    
    return true;
};