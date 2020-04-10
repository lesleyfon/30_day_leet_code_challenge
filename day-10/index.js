/**
 * Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 

Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
 */


/**
 * initialize your data structure here.
 */


/**
 * Solution
 * Step 1: Created a stack in the MinStack Function and bind it to the MinStack prototype
 * Step 2: For the Push prototype, I just called the stack and added the push method to it and passed in the value pass as the argument of the push MinStack prototype
 * Step 3: For the pop function which requires you to remove an element from the stack i used the Array.prototype.pop method which removes the last element
 * Step 4: And for the top prototype method, I used the 'Length - 1 method to get the last element in the array'
 * Step 5: Finally for the getMin prototype, i used the Math.min method and destructured  the stack in in to get single elements since the Math.min accepts single element(s) not arrays
 */
var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
     this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.stack)
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */