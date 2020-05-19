/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    const clonedMap=new Map()
    function clone(node){
        if(!node) return undefined;
        const clonedNode=clonedMap.get(node);
        if(clonedNode) return clonedNode;
        const newNode=new Node(node.val);
        clonedMap.set(node,newNode)

        if(node.neighbors.length>0){
            for(let i=0;i<node.neighbors.length;i++){
                clonedNeighbor=clone(node.neighbors[i])
                newNode.neighbors[i]=clonedNeighbor
            }
        }
        return newNode
    }
    return clone(node)
};