    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    var solve = function (board) {
    let row = board && board.length
    if (!row) return
    let edges = [
        [0, 1],
        [0, -1],
        [-1, 0],
        [1, 0],
    ]
    const O = "O"
    const X = "X"
    let col = board[0].length
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
        if (i == 0 || j === 0 || i === row - 1 || j === col - 1) {
            // 边界
            dfs(i, j)
        }
        }
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
        if (board[i][j] === "A") {
            board[i][j] = O
        } else if (board[i][j] === O) {
            board[i][j] = X
        }
        }
    }

    function dfs(i, j) {
        if (board[i][j] !== O) {
        return
        }
        board[i][j] = "A"
        let stack = [i, j]
        while (stack.length) {
        let y = stack.pop()
        let x = stack.pop()
        for (let k = 0; k < edges.length; k++) {
            let [dx, dy] = edges[k]
            let nx = x + dx
            let ny = y + dy
            // console.log(nx,ny)
            if (nx > 0 && nx < row && ny > 0 && ny < col && board[nx][ny] === O) {
                // console.log()
            board[nx][ny] = "A"
            stack.push(nx, ny)
            }
        }
        }
    }
    }
