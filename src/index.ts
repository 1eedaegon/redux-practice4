import {Circle, Rectangle, Shape} from './practice';

const shapes: Shape[] = [new Circle(5), new Rectangle(5, 8)];

shapes.forEach(shape => {
  console.log(shape.getArea());
});

// Use placeholder type
function merge<A, B>(a: A, b: B) {
  return {...a, ...b};
}

// also used
function wrap<T>(input: T): T {
  return input;
}

// interface
interface Items<T> {
  list: T[];
}

// also use generic
const items: Items<string> = {
  list: ['a', 'b', 'c'],
};
