"use strict";
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
function printHello() {
    console.log('hell yeah');
}
printHello();
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 5));
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(2, 23));
function pow(value, exponent = 10) {
    return value ** exponent;
}
console.log(pow(100));
function divide({ dividend, divisor }) {
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 42 }));
function add1(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(add1(32, 32, 32, 3, 12, 312));
const negateFunction = (value) => value * -1;
console.log(negateFunction(100));
