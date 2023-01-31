/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    // find the rightmost sum;
    let leftSum = 0;
    let rightSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        rightSum += nums[i];
    }
    // increment through the array rightsum and add leftsum
    
    for (let i = 0; i < nums.length; i++) {
        rightSum -= nums[i];
        if (leftSum === rightSum) return i;
        leftSum += nums[i]
    }
    // return -1
    return -1;
};