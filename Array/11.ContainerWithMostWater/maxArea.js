/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0, r = height.length - 1, max = 0;
    while (l < r) {
        let min = Math.min(height[l], height[r]);
        max = Math.max((min * (r - l)), max);
        if (min === height[r]) {
            r--;
        } else {
            l++;
        }
    }
    return max;
};
