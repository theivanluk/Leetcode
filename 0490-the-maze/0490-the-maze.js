/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function(maze, start, destination) {
    const n = maze.length;
    const m = maze[0].length;
    const [endRow, endCol] = destination;
    const queue = [start];
    const visited = new Set([start.join(',')]);
    
    function getNeighbors (coord) {
        const [row, col] = coord;
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        const result = [];

        for (const [delRow, delCol] of directions) {
            let sumRow = row + delRow;
            let sumCol = col + delCol;

            if (
                0 <= sumRow && 0 <= sumCol &&
                sumRow < n && sumCol < m && 
                maze[sumRow][sumCol] !== 1
            ) {
                while (
                    0 <= sumRow + delRow && 0 <= sumCol  + delCol &&
                    sumRow + delRow < n && sumCol + delCol < m &&
                    maze[sumRow + delRow][sumCol + delCol] !== 1
                ) {
                    sumRow = sumRow + delRow;
                    sumCol = sumCol + delCol;
                }
                
                result.push([sumRow, sumCol]);
            }
        }
        
        return result;
    }
    
    while (queue.length > 0) {
        const node = queue.shift();
        if (node[0] === endRow && node[1] === endCol) { return true }
        for (const neighbor of getNeighbors(node)) {
            if (!visited.has(neighbor.join(','))) {
                queue.push(neighbor);
                visited.add(neighbor.join(','));
            }
        }
    }
    
    return false;
};