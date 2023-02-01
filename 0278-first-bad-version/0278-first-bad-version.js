/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        const isFirstBad = (n) => (!isBadVersion(n - 1) && isBadVersion(n + 1)) && isBadVersion(n);
        const middle = (start, end) => Math.floor((start + end) / 2);
        
        let start = 0;
        let end = n
        let index = middle(start, end);
        
        while (!isFirstBad(index)) {
            !isBadVersion(index) ? 
                start = index + 1 :
                end = index - 1;
            index = middle(start, end);
        }
        
        return index;
    };
};