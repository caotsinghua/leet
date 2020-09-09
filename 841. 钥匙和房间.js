/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visited = {}
    let stack=[0]
    visited[0]=true
    while(stack.length){
        let cur = stack.pop()
        let keys = rooms[cur]
        for(let i=0;i<keys.length;i++){
            if(!visited[keys[i]]){
                visited[keys[i]]=true
                stack.push(keys[i])
            }
        }
    }
    if(Object.keys(visited).length === rooms.length){
        return true
    }else{
        return false
    }
};