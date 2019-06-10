/**
 * Initialize your data structure here.
 * https://leetcode.com/problems/implement-queue-using-stacks/
 * 定义两个栈，一个输入栈（先入后出），一个输出栈，输入都是进输入栈，输出都是进输出栈（倒了一下）
 */
var MyQueue = function() {
    this.input = [];
    this.output = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.input.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (!this.output.length) {
        while (this.input.length) {
            this.output.push(this.input.pop());
        }
    }
    return this.output.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (!this.output.length) {
        while (this.input.length) {
            this.output.push(this.input.pop());
        }
    }
    return this.output[this.output.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.output.length && !this.input.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
