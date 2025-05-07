"use strict";
const person = {
    name: "jo",
};
console.log(person.name);
let firstname = "Nigger";
console.log(typeof firstname, firstname);
const json = JSON.parse('55');
console.log(typeof json);
let w = 1;
w = "string";
w = {
    runANonExistentMethod: () => {
        console.log("It is working");
    }
};
if (typeof w === 'object' && w !== null) {
    w.runANonExistentMethod();
}
let y = undefined;
console.log(typeof y);
let z = null;
console.log(typeof z);
const names = [];
names.push("Nigger");
console.log(names);
const namez = ['Niggers'];
// namez.push('Kot'); // error Property 'push' does not exist on type 'readonly string[]'.
console.log(namez);
let ourTuple;
ourTuple = [3, false, 'Smth'];
ourTuple.push('Something new and wrong');
console.log(ourTuple);
const car = {
    type: "Ferrari",
    model: "La Ferrari",
    year: 1970
};
console.log(car);
const car1 = {
    type: "Toyota"
};
car1.mileage = 2000;
console.log(car1);
var CardinaDirections;
(function (CardinaDirections) {
    CardinaDirections[CardinaDirections["North"] = 1] = "North";
    CardinaDirections[CardinaDirections["East"] = 2] = "East";
    CardinaDirections[CardinaDirections["South"] = 3] = "South";
    CardinaDirections[CardinaDirections["West"] = 4] = "West";
})(CardinaDirections || (CardinaDirections = {}));
;
console.log(CardinaDirections.North);
console.log(CardinaDirections.West);
function printStatusCode(code) {
    console.log(`My status code is ${code}`);
}
printStatusCode(404);
printStatusCode('404');
