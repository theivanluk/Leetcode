/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    const fibSeq = new Array(n + 1).fill(0);
    fibSeq[1] = 1;
    
    for (let i = 2; i < fibSeq.length; i++) {
        fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
    }
    
    return fibSeq[n];
};