/**
 * @param {string} s
 * @return {boolean}
 * https://leetcode.com/problems/valid-parentheses/
 * 检测括号, 用栈实现，先入后出
 */
var isValid = function(s) {
    let paren_map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    let stack = [];
    let sArr = s.split('');
    while (sArr.length > 0) {
        let cur = sArr.shift();
        if (!paren_map[cur]) {
            stack.push(cur);
            continue;
        }
        if (stack.length && paren_map[cur] === stack.pop()) {
            continue;
        }
        return false;
    }
    return stack.length ? false : true;
};
