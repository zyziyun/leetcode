/**
 * Initialize your data structure here.
 * 实现一个栈，来回倒两个队列，取出队列最后一个
 */
var MyStack = function() {
    this.queue1 = [];
    this.queue2 = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    if (!this.queue2.length) {
        this.queue1.push(x);
    } else {
        this.queue2.push(x);
    }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if (this.queue1.length) {
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        return this.queue1.shift();
    }

    if (this.queue2.length) {
        while (this.queue2.length > 1) {
            this.queue1.push(this.queue2.shift());
        }
        return this.queue2.shift();
    }
    return null;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    let top = null;
    if (this.queue1.length) {
        while (this.queue1.length > 0) {
            let cur = this.queue1.shift();
            if (!this.queue1.length) {
                top = cur;
            }
            this.queue2.push(cur);
        }
        return top;
    }

    if (this.queue2.length) {
        while (this.queue2.length > 0) {
            let cur = this.queue2.shift();
            if (!this.queue2.length) {
                top = cur;
            }
            this.queue1.push(cur);
        }
        return top;
    }
    return top;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.queue1.length && !this.queue2.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
