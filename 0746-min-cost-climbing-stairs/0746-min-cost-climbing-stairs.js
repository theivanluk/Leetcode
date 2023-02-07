/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const tabulation = new Array(cost.length).fill(0);
    tabulation[0] = cost[0];
    tabulation[1] = cost[1];
    
    for (let i = 2; i < cost.length; i++) {
        tabulation[i] = Math.min(cost[i] + tabulation[i - 1], cost[i] + tabulation[i - 2]);
    }
    
    return Math.min(tabulation[cost.length - 1], tabulation[cost.length - 2]);
};