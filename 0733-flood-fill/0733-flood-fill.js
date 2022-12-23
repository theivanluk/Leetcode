/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  const flood = image[sr][sc];
  
  if (flood === color) { return image };

  function helper(y, x) {
    return !image[y] || image[y][x] !== flood ? null : (
      image[y][x] = color,
      helper(y + 1, x),
      helper(y - 1, x),
      helper(y, x + 1),
      helper(y, x - 1)
    )
  }
  
  helper(sr, sc);
  
  return image
};