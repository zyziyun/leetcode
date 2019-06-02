/**
 * @param {number} n
 * @return {number}
 */

/**
 * 递归+记忆化方式
 */
const memo = {};
var climbStairs = function(n) {
    if (n <= 3) {
      return n;
    }
    let n1 = memo[n - 1] ? memo[n - 1] : climbStairs(n - 1);
    memo[n - 1] = n1;
    let n2 = memo[n - 2] ? memo[n - 2] : climbStairs(n - 2);
    memo[n - 2] = n2;
    return n1 + n2;
};

/**
 * 动态规划方式
 */
var climbStairs = function(n) {
    let dp = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
};

