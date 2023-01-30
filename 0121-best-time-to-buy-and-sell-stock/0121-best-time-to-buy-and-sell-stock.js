/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let profit = 0;
    
    for (const currPrice of prices) {
        currPrice < minPrice ? minPrice = currPrice : profit = Math.max(profit, currPrice - minPrice)
    }
    
    return profit;
};