/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    const result = [];
    let i = num.length - 1;
    
    while (i >= 0) {
        const digit = num[i] + k
        result.push(digit % 10);
        k = Math.floor(digit / 10);
        i--;
    }
    
    while (k > 0) {
        result.push(k % 10);
        k = Math.floor(k / 10);
    }
    
    return result.reverse();
};