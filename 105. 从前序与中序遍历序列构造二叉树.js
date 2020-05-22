/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let inorderMap = {}
  inorder.forEach((item, i) => (inorderMap[item] = i))
  let i=0;
  function build(start, end) {
    if(start>end){
        return null
    }
    let rootIndex = start
    rootIndex = inorderMap[preorder[i]]

    // 找到跟
    const rootNode=new TreeNode(inorder[rootIndex])
    i++;
    rootNode.left=build(start,rootIndex-1)
    rootNode.right=build(rootIndex+1,end)
    return rootNode;
  }
  const result=build(0,inorder.length-1)
  return result
}
