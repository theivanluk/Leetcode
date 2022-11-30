/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const getIndex = (start, end) => Math.floor((start + end) / 2);
    
    let start = 0;
    let end = nums.length - 1;
    let index = getIndex(start, end);
    
    while (nums[index] !== target && index!== -1) {
        index = start === end ? -1 :
                nums[index] > target 
                    ? (end = index - 1, getIndex(start, end)) 
                    : (start = index + 1, index = getIndex(start, end))
    }
    
    return index;
};