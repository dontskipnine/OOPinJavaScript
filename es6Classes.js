const _stack = new WeakMap();

class Stack2 {
    constructor() { _stack.set(this, []); }

    peek() {
        if (_stack.get(this).length === 0) { throw new Error('Stack is empty!'); }
        return _stack.get(this)[_stack.get(this).length - 1];
    }

    pop() {
        if (_stack.get(this).length === 0) { throw new Error('Stack is empty!'); }
        return _stack.get(this).pop();
    }

    push(value) { _stack.get(this).push(value); }
    
    get count() { return _stack.get(this).length; }
}

const stack = new Stack2();