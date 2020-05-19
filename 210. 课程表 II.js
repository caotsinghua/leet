/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const courses=[]
    const nodeMap={}
    const VISITED='visited'
    const UNVISITED='unvisited'
    const VISITING='visiting'
    let hasCircle=false
    for(let i=0;i<numCourses;i++){
        courses[i]=[]
        nodeMap[i]={
            status:UNVISITED
        } // 节点状态
    }

    prerequisites.forEach(([e,s])=>{
        courses[s].push(e)

    })
    // console.log(courses)
    // 遍历

    let res=[]

    // 深度
    for(let i=0;i<numCourses && !hasCircle;i++){

       if(nodeMap[i].status===UNVISITED){
        deep(i)
       }
        // if(nodeMap[i].status===UNVISITED){
        //     // console.log("访问节点",i)
        //     // 对每个节点遍历
        //     let stack=[i]
        //     while(stack.length){
        //         let curNode=stack[stack.length-1]
        //         // console.log({curNode})
        //         let neighbours=courses[curNode]


        //         nodeMap[curNode].status=VISITING

        //         let unvisitedCount=0;

        //         for(let t=0;t<neighbours.length;t++){
        //             let {j}=neighbours[t]
        //             if(nodeMap[j].status===VISITING) {
        //                 console.log(j,'环')
        //                 return []
        //             } // 存在环
        //             if(nodeMap[j].status===UNVISITED){
        //                 stack.push(j)
        //                 unvisitedCount++;
        //             }
        //         }


        //         if(unvisitedCount===0){
        //             // 子节点都访问过了
        //             res.push(curNode)
        //             nodeMap[curNode].status=VISITED
        //         }
        //     }
        // }


    }
    function deep(node){
        nodeMap[node].status=VISITING

        let neighbours=courses[node] // 子节点

        for(let i=0;i<neighbours.length;i++){
            let j=neighbours[i]
            if(nodeMap[j].status===UNVISITED){
                deep(j)
                if(hasCircle) {
                    return
                }
            }else if(nodeMap[j].status===VISITING){
                // console.log("存在环")
                hasCircle=true
                return
            }


        }
        res.push(node)
        nodeMap[node].status=VISITED
    }
    if(hasCircle) return []
    return res.reverse();
};

// console.log(findOrder(2,[[0,1],[1,0]]))
