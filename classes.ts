// class Person1 {
//     name: string = ""; 
// }

// const person = new Person1();
// person.name = "Jo";
// console.log(person);

// class Person1 {
//     private name: string;

//     public constructor(name: string) {
//         this.name = name;
//     }

//     public getName(): string {
//         return this.name;
//     }
// }

// class Person1 {
//     public constructor(private name: string) {

//         public getName(): string {
//             return this.name;
//         }
//     }
// }

// class Person1 {
//     private readonly name: string;

//     public constructor(name: string) {
//         this.name = name;
//     }

//     public getName(): string {
//         return this.name;
//     }
// }

// const person = new Person1('Dior');
// console.log(person.getName());


// interface Shape {
//     getArea: () => number;
// }
// class Rectangle implements Shape {
//     public constructor(protected readonly width: number, protected readonly height: number) {}

//     public getArea: ():  number {
//         return this.width * this.innerHeight;
//     }
// }
// const myRect = new Rectangle(1,30);
// console.log(myRect.getArea());