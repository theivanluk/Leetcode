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
        const isFirstBadVersion = (n) => isBadVersion(n) && (!isBadVersion(n - 1) && isBadVersion(n + 1));
        const getMiddle = (start, end) => Math.floor((start + end) / 2);
        
        let start = 0;
        let end = n;
        let middle = getMiddle(start, end);
        
        while (!isFirstBadVersion(middle)) {
            middle = !isBadVersion(middle) 
                        ? (start = middle + 1, getMiddle(start, end)) 
                        : (end = middle - 1, getMiddle(start, end))
        }
        
        return middle;
    };
};