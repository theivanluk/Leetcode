/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (grid.length === 0 || grid[0].length === 0) return 0;

  const visited = new Array(grid.length).fill(0).map(row => new Array(grid[0].length).fill(false));

  let numIslands = 0;

  function getNeighbors(node) {
      const [row, col] = node;
      const numRow = grid.length;
      const numCol = grid[0].length;
      const delRow = [-1, 1, 0, 0];
      const delCol = [0, 0, -1, 1];
      const result = [];

      for (let i = 0; i < delRow.length; i++) {
          const neighborRow = row + delRow[i];
          const neighborCol = col + delCol[i];

          if (
              0 <= neighborRow &&
              0 <= neighborCol &&
              neighborRow < numRow &&
              neighborCol < numCol
          ) {
              result.push([neighborRow, neighborCol]);
          }
      }

      return result;
  } // returns array of nodes;

  function bfs(node) {
      const queue = [node];
      while (queue.length > 0) {
          let currentNode = queue.shift();
          for (let neighbor of getNeighbors(currentNode)) {
              const [row, col] = neighbor;
              if (visited[row][col]) continue;
              if (grid[row][col] === "1") {
                  queue.push(neighbor);
              }
              visited[row][col] = true;
          }
      }
  } // visits every node of island;

  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if (visited[i][j]) continue;
          if (grid[i][j] === "0") {
              visited[i][j] = true;            
          } else {
              bfs([i, j]);
              numIslands++;
          }
      }
  }

  return numIslands;
};