/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  if (!root) return root
  
  function createTree(node){
      const newNode=new TreeNode(node.val)
      if(node.right){
          newNode.left=createTree(node.right)
      }
      if(node.left){
          newNode.right=createTree(node.left)
      }
      return newNode
  }

  return createTree(root)
  
}
