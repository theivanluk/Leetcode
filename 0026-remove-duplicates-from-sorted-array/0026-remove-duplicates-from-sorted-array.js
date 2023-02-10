/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
 for (let i = 0; i < nums.length; i++) {
        let j = i;
        let countRm = 0;
        
        if (nums[i] === nums[i + 1]) {
            while (nums[i] === nums[++j]) {
               countRm++;
            }
            nums.splice(i, countRm);
            i - countRm;
        }
    }
    
    return nums.length
};