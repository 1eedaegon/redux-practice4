"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doSomeStuff = void 0;
const practice_1 = require("./practice");
console.log('Try npm run lint/fix!');
const longString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';
const trailing = 'Semicolon';
const why = 'am I tabbed?';
function doSomeStuff(withThis, andThat, andThose) {
    //function on one line
    if (!andThose.length) {
        return false;
    }
    console.log(withThis);
    console.log(andThat);
    console.dir(andThose);
    return;
}
exports.doSomeStuff = doSomeStuff;
// TODO: more examples
function sumArray(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
console.log(`total example ${total}`);
const shapes = [new practice_1.Circle(5), new practice_1.Rectangle(5, 8)];
shapes.forEach(shape => {
    console.log(shape.getArea());
});
const person = {
    name: '김사랑',
    age: 17,
};
const person2 = {
    name: '나이가 비밀',
};
const expert = {
    name: '김개발씨',
    skills: ['js', 'ts', 'c++'],
};
const leedaegon = {
    name: '이대곤씨',
    age: 31,
    skills: ['js', 'ts', 'k8s'],
};
const people = [expert, leedaegon];
console.log(people);
//# sourceMappingURL=index.js.map