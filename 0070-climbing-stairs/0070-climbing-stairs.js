/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    const ways = new Array(n + 1).fill(0);
    ways[1] = 1;
    ways[2] = 2;
    
    for (let i = 3; i < ways.length; i++) {
        ways[i] = ways[i - 1] + ways[i - 2];
    }
    
    return ways[n];
};