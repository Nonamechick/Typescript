"use strict";
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hell', 32));
class NamedValue {
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name}: ${this._value}`;
    }
}
const value = new NamedValue('myNumber');
value.setValue(29);
console.log(value.toString());
