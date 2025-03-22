function getTime(): number {
    return new Date().getTime();
}
console.log(getTime())

function printHello(): void {
    console.log('hell yeah');
}
printHello();

function multiply(a: number, b: number) {
    return a*b;
}
console.log(multiply(2,5));

function add(a: number, b: number, c?: number) {
    return a + b + (c||0);
}
console.log(add(2,23));

function pow(value: number, exponent: number = 10) {
    return value ** exponent;
}
console.log(pow(100))

function divide({ dividend, divisor }: { dividend: number, divisor: number}) {
    return dividend / divisor;
}
console.log(divide({dividend: 10, divisor: 42}));

function add1(a: number, b: number, ...rest: number[]) {
    return a+b+ rest.reduce((p,c ) => p+c,0);
}
console.log(add1(32,32,32,3,12,312));

type Negate = (value: number) => number;
const negateFunction: Negate = (value) => value * -1;
console.log(negateFunction(100));