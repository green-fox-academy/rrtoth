import { Person } from "./person"

export class Mentor extends Person {
    _level: string;

    constructor(name?: string, age?: number, gender?: string, level: string = "intermediate") {
        super(name, age, gender)
        this._level = level;
    }
    //level options: junior/intermediate/senior

    goal(): string {
        return "Educate brilliant junior software developers."
    }

    protected specific(): string {
        return " " + this._level + " mentor";
    }
}