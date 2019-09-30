import { Person } from "./person"

export class Sponsor extends Person {
    protected _company: string;
    protected _hiredStudents: number;

    constructor(name?: string, age?: number, gender?: string, company: string = "Google", hired: number = 0) {
        super(name, age, gender);
        this._company = company;
        this._hiredStudents = hired;
    }

    protected specific(): string {
        return " who represents " + this._company + " and hired " + this._hiredStudents + " students so far";
    }

    hire(number?: number) {
        if (number) {
            this._hiredStudents += number;
        } else {
            this._hiredStudents++;
        }
    }

    goal(): string {
        return "Hire brilliant junior software developers."
    }
}