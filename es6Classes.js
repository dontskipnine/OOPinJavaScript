const _count = new WeakMap();
const _stack = new WeakMap();

class Stack2 {
    constructor() {
        _count.set(this, 0);
        _stack.set(this, []);
    }

    peek() {
        let num = _count.get(this) - 1;
        return _stack.get(this)[num];
    }

    pop() {
        if (count <= 0) { throw new Error('Stack is empty!'); }
        let num = _count.get(this) - 1;
        return _stack.get(this).pop[num];
    }

    push(value) {
        let num = _count.get(this) - 1;
        _stack.set(this).push(value);
        _count.set(this, + 1);
    }
    
    get count() { return _count.get(this); }
}

const stack3 = new Stack2();