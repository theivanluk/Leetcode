/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let bull = 0;
    let cow = 0;

    const secretMap = {};
    const guessMap ={};
      
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            bull++;
        } else {
            secretMap[secret[i]] ||= 0;
            secretMap[secret[i]] += 1;
            
            guessMap[guess[i]] ||= 0;
            guessMap[guess[i]] += 1;
        }
    }
    
    for (const letter in secretMap) {
        if (letter in guessMap) {
            cow += Math.min(guessMap[letter], secretMap[letter]);
        }
    }
    
    return `${bull}A${cow}B`
};