/**
 * @param {number[]} digits
 * @return {number[]} 
 * Input: [1,2,3] Output: [1,2,4]
 */
var plusOne = function(digits) {
    let base = 10;
    let i = digits.length - 1;
    let carry = 1;
    while (carry) {
        if (i < 0) { digits.unshift(carry--) }
        let temp = digits[i] + carry;
        digits[i--] = temp % base;
        carry = (temp / 10) | 0;
    }
    return digits;
};

/**
 * note: 小数取整：~~number；number ^ 0；number << 0；
 */