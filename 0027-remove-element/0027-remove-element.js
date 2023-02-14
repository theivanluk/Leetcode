/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let front = 0
    let end = nums.length;
    
    while (front < end) {
        if (nums[front] !== val) {
            front++;
        } else {
            nums[front] = nums[end - 1];
            end--;
        }
    }
    
    return end;
};