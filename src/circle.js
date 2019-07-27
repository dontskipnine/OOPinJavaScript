// Abstraction at work
const _radius = new WeakMap();

// Interface
// Adding export before class is ES6 Syntax
export class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log('Circle with radius ' + _radius.get(this));
  }
}

// CommonJS Syntax
//module.exports = Circle;