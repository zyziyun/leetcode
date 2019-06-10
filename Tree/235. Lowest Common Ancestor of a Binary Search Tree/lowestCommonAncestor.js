/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 */
// 如果p和q都小于root，则p/q在左子树、如果p/q都大于root，则公共祖先在右子树；
// 如果p和q在左右一边，则root为公共祖先
// 递归
var lowestCommonAncestor = function(root, p, q) {
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    return root;
};


// 迭代法
var lowestCommonAncestor = function(root, p, q) {
    while (root) {
        if (p.val < root.val && q.val < root.val) {
            root = root.left;
            continue;
        }
        if (p.val > root.val && q.val > root.val) {
            root = root.right;
            continue;
        }
        return root;
    }
};