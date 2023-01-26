/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    
    function getNeighbors(index, arr) {
        const directions = [-arr[index], arr[index]];
        const result = [];
        
        for (const direction of directions) {
            const dir = index + direction;
            if (0 <= dir && dir < arr.length) {
                result.push(dir)     
            }
        }
        
        return result;
    }
    
    function bfs(start, array) {
        const queue = [start];
        const visited = new Array(arr.length).fill(false);
        
        while (queue.length > 0) {
            const currIndex = queue.shift();
            if (arr[currIndex] === 0) return true;
            for (const neighbor of getNeighbors(currIndex, arr)) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
        
        return false;
    }
    
    return bfs(start, arr);
};