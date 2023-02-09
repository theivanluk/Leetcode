/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let index = Math.floor(nums.length - 1/ 2);
    let lowerLimit = 0;
    let upperLimit = nums.length;
    
    while (0 <= index && index < nums.length) {
        if (nums[index] === target) return index;
        if (nums[index] < target) {
            lowerLimit = index;
        }
        if (nums[index] > target) {
            upperLimit = index;
        }
        if (Math.floor((lowerLimit + upperLimit) / 2) === index) break;
        index = Math.floor((lowerLimit + upperLimit) / 2);
    }
    
    return -1;
};