'use strict';

export class Person {
    protected _name: string;
    protected _age: number;
    protected _gender: string;

    constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female") {
        this._name = name;
        this._age = age;
        this._gender = gender;
    }

    introduce() {
        console.log("Hi, I'm " + this._name + ", a " + this._age + "year old " + this._gender + ".");
    }

    getGoal(){
        console.log("My goal is: Live for the moment!");
    }
}