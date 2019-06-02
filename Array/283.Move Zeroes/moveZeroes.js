/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 移动所有的0到末尾 [0,1,0,3,12] => [1,3,12,0,0]
 */
var moveZeroes = function(nums) {
    for (let i = 0, sign = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            let temp = nums[sign];
            nums[sign++] = nums[i];
            nums[i] = temp;
        }
    }
};