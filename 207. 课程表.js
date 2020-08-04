/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let graph = {}
  for (let i = 0; i < prerequisites.length; i++) {
    const [cur, pre] = prerequisites[i]
    if (cur === pre) return false
    if (graph[pre]) {
      graph[pre].push(cur)
    } else {
      graph[pre] = [cur]
    }
  }
  const visited = {}
  let valid = true
  function dfs(node) {
    const children = graph[node]

    if (children) {
      for (let i = 0; i < children.length; i++) {
        const status = visited[children[i]]
        // console.log(status, children[i])
        if (status === 1) {
          // reading 存在环
          valid = false
          return
        } else if (status === 2) {
          // 已经读取过
        } else {
          //   没有访问过
          visited[children[i]] = 1
          dfs(children[i])
          if (!valid) {
            return
          }
        }
      }
    }
    visited[node] = 2
  }

  for (let i = 0; i < numCourses; i++) {
    if (!visited[numCourses[i]]) {
      dfs(i)
    }
  }

  return valid
}
