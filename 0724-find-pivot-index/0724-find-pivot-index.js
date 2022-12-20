/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let rightSum = nums.reduce((accum, val) => accum + val, 0) - nums[0];
    let leftSum = 0;

    if (leftSum === rightSum) { return 0 }

    for (let pivot = 1; pivot < nums.length; pivot++) {
        leftSum += nums[pivot - 1];
        rightSum -= nums[pivot];

        if (leftSum === rightSum) { return pivot };
    }

    return -1;
};