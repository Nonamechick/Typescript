function createPair<S, T>(v1: S, v2: T): [S,T] {
    return [v1, v2]
} 
console.log(createPair<string, number>('hell',32));

class NamedValue<D> {
    private _value: D | undefined;
    constructor(private name: string) {}

    public setValue(value: D) {
        this._value = value;
    }

    public getValue(): D | undefined {
        return this._value;
    }

    public toString(): string {
        return `${this.name}: ${this._value}`;
    }
}
const value = new NamedValue<number>('myNumber');
value.setValue(29);
console.log(value.toString());