let x: unknown = 'hello';
console.log((x as string).length);

let i: unknown = 'hell';
console.log((<string>i).length);