/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const bstToGst = function (root) {
  let sum = 0;
  const update = (node) => {
    // base case
    if (node === null) {
      return;
    }

    update(node.right);

    // update node
    sum += node.val;
    node.val = sum;

    update(node.left);
    return node;
  };

  return update(root);
};
