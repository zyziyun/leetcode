/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * https://leetcode.com/problems/validate-binary-search-tree/
 */

// 中序 升序遍历
var isValidBST = function(root) {
    let prev = null;

    var inOrder = function(root) {
        if (!root) {
            return true;
        }
        if (!inOrder(root.left)) {
            return false;
        }
        if (prev !== null && prev >= root.val) {
            return false;
        }
        prev = root.val;
        return inOrder(root.right);
    };

    return inOrder(root);
};


// 确定当前子树的上下界，判断是否越界
var isValid = function(root, min, max) {
    if (!root) {
        return true;
    }
    if (min != null && root.val <= min) {
        return false;
    }
    if (max != null && root.val >= max) {
        return false;
    }
    return isValid(root.left, min, root.val) && isValid(root.right, root.val, max);
}
// 递归的方案
var isValidBST = function(root) {
    return isValid(root);
};