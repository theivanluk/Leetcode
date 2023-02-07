/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const tab = new Array(m).fill(0).map(row => new Array(n).fill(0));
        
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (row === 0 && col === 0) {
                tab[row][col] = 1;
                continue;
            }
            const top = row - 1 >= 0 ? tab[row - 1][col] : 0;
            const left = col  - 1 >= 0 ? tab[row][col - 1] : 0;
            tab[row][col] = top + left;
        }
    }
    
    return tab[m - 1][n - 1];
};