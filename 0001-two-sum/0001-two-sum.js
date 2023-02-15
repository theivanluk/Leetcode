/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const indexMap = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in indexMap) return [indexMap[nums[i]], i];
        const diff = target - nums[i];
        indexMap[diff] = i;
    }
};