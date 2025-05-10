let user: string = "hfsdfhskjdf"

let userId: number = 414131

let userLogin: boolean = true

console.log(user);
console.log(userId);
console.log(userLogin);

function addTwo(num: number): number {
    return num+2
}

// function getValue(myVal: number): boolean {
//     if(myVal>5) {
//         return true
//     }
//     return "200 ok"
// }

const getHello = (s: string): string => {
    return ""
}
const heros = ["fsfddfs",'fsdfsd','fsfsdfsdfs']

heros.map((hero):string => {
    return `Heros ${hero}`
})

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}
function createUser(user: User) {
    return {name: "", email:"", isActive: true};
}

createUser({name: "Kotik", email:"", isActive: true, _id: ""})

let myUser: User = {
    _id: "312",
    name: "fsdf",
    email: 'fdsfsdf',
    isActive: false
}
myUser.email = "fsdfsfd"

const s: string[] = []
const her: Array<number> = []


her.push(3)
s.push('kotil')

// UNION TYPES 
let score: number | string = 33
score = 455
score = '4234'

type User1 = {
    name: string;
    id: number
}
type Admin = {
    name: string;
    id: number
}
let kha: User1 | Admin ={name: "jal",id: 3423}

//array
const data: (string | number)[] = ['21','22',23] // or do any[]
// const data1: string[] | number[] = ['32','234',423] not allowed in ts

// TUPLES
let tUser: [string, number, boolean] 

tUser = ['fds',123,true] // order matters


// ENUMS
enum SeatChoice {
    Aisle = 'fsd',
    Middle= 3,
    Window,
    Fourth
}

const hcSeat = SeatChoice.Aisle

// Interface

interface User2 {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string
    startTrail(): string,
    getCoupon(couponname: string, value: number): number
}

interface User2 {
    gitTokem?: string
}

interface Admin1 extends User2 {
    role: "admin" | 'ta' | 'lengs'
}

const hot: Admin1 = {dbId: 423, email: "sdfs", userId: 423, role: 'admin',
    startTrail: ()=> {
        return 'dghkjsgsk'
    },
    getCoupon: (name: 'gsdds', value: 42342) => {
        return 234
    },
    gitTokem: 'fsdfsd'
}
hot.email = 'fsdfsd'

// Gererics

const score1: Array<number> = []
const names1: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}
function identityTwo(val: any): any {
    return val
}
function identityThree<Type>(val: Type): Type {
    return val
}
function identityFour<T>(val: T): T {
    return val
}