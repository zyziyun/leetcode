/*
 * @Author: ziyun
 * @Date: 2019-06-05 09:02:34
 * @Last Modified By: ziyun
 * @Last Modified Time: 2019-06-05 09:03:01
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function createTree(arr) {
    let root = new TreeNode(arr.shift());
    let queue = [root];

    while (arr.length) {
        let node = queue.shift();
        node.left = new TreeNode(arr.shift());
        node.right = new TreeNode(arr.shift());
        queue.push(node.left);
        queue.push(node.right);
    }
    return root;
}

createTree([3, 9, 20, null, null, 15, 7]);