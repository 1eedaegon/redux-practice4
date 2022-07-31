import {Circle, Rectangle, Shape} from './practice';

console.log('Try npm run lint/fix!');

const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';

const trailing = 'Semicolon';

const why = 'am I tabbed?';

export function doSomeStuff(
  withThis: string,
  andThat: string,
  andThose: string[]
) {
  //function on one line
  if (!andThose.length) {
    return false;
  }
  console.log(withThis);
  console.log(andThat);
  console.dir(andThose);
  return;
}
// TODO: more examples
function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
console.log(`total example ${total}`);

const shapes: Shape[] = [new Circle(5), new Rectangle(5, 8)];

shapes.forEach(shape => {
  console.log(shape.getArea());
});
