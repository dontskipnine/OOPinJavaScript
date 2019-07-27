// ES6 Syntax. Now this is sans webpack && accomplished
//      by inserting module as the type into the index.html.
import {Circle} from './circle.js';

// CommonJS Syntax
//const Circle = require('./circle');

// The Test
const c = new Circle(10);
c.draw();