class UserA {
    readonly city: string = 'Jupiter'
    constructor (
        public email: string, 
        public name: string,
        // private userId: number
    ) {
        this.email = email,
        this.name = name
    }
}

const wdas = new UserA( 'sdg', 'fsdfsd')

interface TakePhoto {
    camera: string
    filter: string
    burst: string
}
class Insta implements TakePhoto {
    constructor( 
        public camera: string,
        public filter: string,
        public burst: string
    ) {}
}
class Youtube implements TakePhoto {
    constructor( 
        public camera: string,
        public filter: string,
        public burst: string,
        public short: string
    ) {}
}