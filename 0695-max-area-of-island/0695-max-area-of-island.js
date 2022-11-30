/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let max = 0;
  
  for (let i = 0; i < grid.length; i++) {
    
    for (let j = 0; j < grid[i].length; j++) {
      const cell = grid[i][j];
      if (cell === 1) {
        max = Math.max(max, findArea(grid, j, i));
      }
    }
    
  }
  
  return max;
};

const findArea = (grid, x, y) => {
  if (x < 0 || y < 0 || x > grid[0].length - 1 || y > grid.length - 1 || grid[y][x] === 0 || grid[y][x] === 2) {
    return 0;
  }
  grid[y][x] = 2;
  return 1 + findArea(grid, x + 1, y) + findArea(grid, x - 1, y) + findArea(grid, x, y + 1) + findArea(grid, x, y - 1);
}