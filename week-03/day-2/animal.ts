'use strict';

import * as test from 'tape'

export class Animal {
    hunger: number;
    thirst: number;

    constructor(hunger: number = 50, thirst: number = 50) {
        this.hunger = hunger;
        this.thirst = thirst;
    }

    public eat() {
        this.hunger--
    }

    public drink() {
        this.thirst--
    }

    public play() {
        this.hunger++;
        this.thirst++;
    }
}

let a = new Animal

a.eat()
a.drink()
a.drink()
a.drink()
a.eat()
a.drink()
a.play()

test("animal", t => {
    let actual = a.hunger;
    let expected = 49;

    t.equal(actual, expected);
    t.end()
})

test("animal", t => {
    let actual = a.thirst;
    let expected = 47;

    t.equal(actual, expected);
    t.end()
})