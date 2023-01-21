class HeapItem {
    constructor(item, priority) {
        this.item = item;
        this.priority = priority;
    }
}

class PrioQueue {
    constructor(compare = 1) {
        this.heap = [];
        this.compare = compare;
    }
    
    comparator(a, b, orEqual = false) {
        if (orEqual) {
            return this.compare ? (a <= b) : (a >= b);
        } else {
            return this.compare ? (a < b) : (a > b);
        }
    }
    
    push(item, priority = item) {
        this.heap.push(new HeapItem(item, priority));
        this.bubbleUp();
    }
    
    bubbleUp() {
        let index = this.size() - 1;
        
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            const element = this.heap[index];
            
            if (this.comparator(parent.priority, element.priority, true)) { break };
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }
    
    pop() {
        const elem = this.heap[0];
        this.heap[0] = this.heap[this.size() - 1];
        this.heap.pop();
        this.bubbleDown();
        return elem.item;
    }
    
    bubbleDown() {
        let index = 0;
        let placeholder = index;
        const n = this.size();
        
        while(index < n) {
            const left = 2 * index + 1;
            const right = left + 1;
            
            if ((left < n && this.comparator(this.heap[left].priority, this.heap[placeholder].priority)) ||
                (right < n && this.comparator(this.heap[right].priority, this.heap[placeholder].priority))
            ) {
                if (right < n) {
                    placeholder = this.comparator(this.heap[left].priority, this.heap[right].priority) ? left : right;
                } else {
                    placeholder = left;
                }
            } else { break }
        
            [this.heap[index], this.heap[placeholder]] = [this.heap[placeholder], this.heap[index]];
            index = placeholder;
        }
    }

    peek() {
        return this.size() > 0 ? this.heap[0].item : null;
    }
    
    size() {
        return this.heap.length;
    }
}

var MedianFinder = function() {
    this.lowerHalf = new PrioQueue(0); // max heap
    this.upperHalf = new PrioQueue(); // min heap
};

/** 
 * @param {number} num
 * @return {void}
 */

MedianFinder.prototype._rebalance = function () {
    if (this.lowerHalf.size() < this.upperHalf.size()) {
        this.lowerHalf.push(this.upperHalf.pop());
    } 
    if (this.lowerHalf.size() > this.upperHalf.size() + 1) {
        this.upperHalf.push(this.lowerHalf.pop());
    }
}

MedianFinder.prototype.addNum = function(num) {
    console.log(num, 'add');
    if (this.upperHalf.size() === 0 || num < this.upperHalf.peek()) {
        this.lowerHalf.push(num);
    } else {
        this.upperHalf.push(num);
    }
    
    this._rebalance();
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    console.log('find med');
    if (this.lowerHalf.size() === this.upperHalf.size()) {
        return (this.lowerHalf.peek() + this.upperHalf.peek()) / 2; 
    } else {
        return this.lowerHalf.peek();
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */