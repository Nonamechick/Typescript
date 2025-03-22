type Person = {
    name: string;
};
const  person: Person = {
    name: "jo",
};

console.log(person.name);
let firstname: string = "Nigger";
console.log(typeof firstname, firstname);

const json = JSON.parse('55');
console.log(typeof json);

let w: unknown = 1; 
w = "string"; 

w = { 
  runANonExistentMethod: () => {
    console.log("It is working");
  } 
} as { runANonExistentMethod: () => void }

if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod(); 
} 

let y: undefined = undefined;
console.log(typeof y);

let z: null = null;
console.log(typeof z)

const names: string[] = [];
names.push("Nigger");
console.log(names);

const namez: readonly string[] = ['Niggers'];
// namez.push('Kot'); // error Property 'push' does not exist on type 'readonly string[]'.
console.log(namez);

let ourTuple: [number, boolean, string];
ourTuple = [3, false, 'Smth'];
ourTuple.push('Something new and wrong');
console.log(ourTuple);

const car: { type: string, model: string, year: number } = {
    type: "Ferrari",
    model: "La Ferrari",
    year: 1970
};
console.log(car);

const car1: { type: string, mileage?: number } = {
    type: "Toyota"
};
car1.mileage = 2000;
console.log(car1);

enum CardinaDirections {
    North = 1,
    East,
    South,
    West
};
console.log(CardinaDirections.North);
console.log(CardinaDirections.West);

function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}`)
}
printStatusCode(404);
printStatusCode('404');

