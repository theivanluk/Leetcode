/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length%2 === 1) return false;
    
    const bracketPair = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    
    const stack = [];
    
    let pointer = 0;
    
    while (pointer < s.length) {
        if (s[pointer] in bracketPair) {
            stack.push(s[pointer]);
        } else {
            const currBracket = stack.pop();
            if (s[pointer] !== bracketPair[currBracket]) return false;
        }
        pointer++;
    }
    
    if (stack.length !==  0) return false;
    
    return true;
};