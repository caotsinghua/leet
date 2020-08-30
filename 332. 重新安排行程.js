/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const graph = {}
    for(let i=0;i<tickets.length;i++){
        const [s,e] = tickets[i]
        if(graph[s]){
            graph[s].push(e)
        }else{
            graph[s] = [e]
        }
    }
    console.log(graph)

    const entry = "JFK"
    const res=[]
    // const visited = {}
    function loop(entry){
        const targets = graph[entry] || []
        targets.sort()
        while(targets.length){
            let cur = targets.shift()
            loop(cur)
        }
        res.push(entry)
    }
    loop(entry)
    res.reverse()
    return res
};