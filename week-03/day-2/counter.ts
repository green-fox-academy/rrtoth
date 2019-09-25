'use strict';

class Counter {
    integer: number;

    constructor(integer: number = 0) {
        this.integer = integer;
    }
    public add(number?: number) {
        if (number) {
            this.integer += number;
        } else {
            this.integer++;
        }
    }

    public get() {
        return this.integer.toString();
    }

    public reset() {
        this.integer = 0;
    }
}

let one = new Counter();

one.add();
one.reset();
one.add(5);

console.log(one.get())