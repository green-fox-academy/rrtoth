import { Person } from "./person"

export class Student extends Person {
    protected _previousOrgaization: string;
    protected _skippedDays: number;

    constructor(name?: string, age?: number, gender?: string, previousOrg: string = "The School of Life", skipped: number = 0) {
        super(name, age, gender);
        this._previousOrgaization = previousOrg;
        this._skippedDays = skipped;
    }

    goal(): string {
        return "Be a junior software developer."
    }

    protected specific(): string {
        if (this._skippedDays == 0) {
            return " from " + this._previousOrgaization
                + " who hasn't skipped any days from the course so far";
        } else {
            return " from " + this._previousOrgaization + " who skipped "
                + this._skippedDays + " days from the course already";
        }
    }

    skipDays(numberOfDays?) {
        if (numberOfDays) {
            this._skippedDays += numberOfDays;
        } else {
            this._skippedDays++;
        }
    }
}