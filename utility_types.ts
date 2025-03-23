interface Point {
    x: number;
    y: number;
}
let pointPart: Partial<Point> = {};
pointPart.x = 193;
console.log(pointPart);

interface Autocar {
    make: string;
    model: string;
    mileage?: number;
}
let myCar: Required<Autocar> = {
    make: 'Ford',
    model: 'Mustang',
    mileage: 120002231
};
console.log(myCar);

interface Human {
    name: string;
    age: number;
    location?: string;
}
const bob: Omit<Human, 'age' | 'location'> = {  // or pick here Pick<Human, 'name'> it's keeps only name
    name: 'bob'
};
console.log(bob);

type Primitive = string | number | boolean;
const value1: Exclude<Primitive, string> = true;  // removed
console.log(typeof value1);