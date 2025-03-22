type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
};

const CarYear: CarYear = 2001
const CarType: CarType = "Toyota"
const CarModel: CarModel = "Corolla"
const car2: Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
};
console.log(car2);


interface Rectangle {
    height: number,
    width: number,
};
const rectangle: Rectangle = {
    height: 20,
    width: 10
};
console.log(rectangle);

interface ColoredRectangle extends Rectangle {
    color: string
};
const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: 'red'
};
console.log(coloredRectangle); 