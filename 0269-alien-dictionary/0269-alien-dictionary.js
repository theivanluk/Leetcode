/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    function findInDegree(graph) {
        const inDegree = new Map();
        
        for (const node of graph.keys()) {
            inDegree.set(node, 0);
        }
        
        for (const [node, neighbors] of graph) {
            for (const neighbor of neighbors) {
                inDegree.set(neighbor, inDegree.get(neighbor) + 1);
            }
        }
        
        return inDegree;
    }   
    function topoSort(graph) {
        const queue = [];
        const result = [];
        const inDegree = findInDegree(graph);
        
        
        
        for (const [node, degree] of inDegree) {
            degree === 0 ? queue.push(node) : null;
        }
            
        while (queue.length > 0) {
            const currNode = queue.shift();
            result.push(currNode);
            for (const neighbor of graph.get(currNode)) {
                inDegree.set(neighbor, inDegree.get(neighbor) - 1);
                inDegree.get(neighbor) === 0 ? queue.push(neighbor) : null;
            }
        }
        
        for (const [node, degree] of inDegree) {
            if (degree !== 0) {
                return "";
            }
        }
            
        return result.join('');
    }
    function findOrdering(word1, word2, graph) {
        let short = word1.length <= word2.length ? word1 : word2;        
        for (let i = 0; i < short.length; i++) {
            if (word1[i] !== word2[i]) {
                graph.get(word1[i]).add(word2[i]);
                return word1;
            }
        }
        return word1.length > word2.length? "" : word1;
    }
    
    const graph = new Map();
        
    for (const word of words) {
        for (let i = 0; i < word.length; i++) {
            !graph.has(word[i]) ? graph.set(word[i], new Set()) : null;
        }
    }
    
    
    for (let j = 0; j < words.length - 1; j++) {
        let result = findOrdering(words[j], words[j + 1], graph);
        if (result === "") return result;
    }
    
    return topoSort(graph);
};