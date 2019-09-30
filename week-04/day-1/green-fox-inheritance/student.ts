import { Person } from "./person"

export class Student extends Person {
    protected _previousOrgaization: string;
    protected _skippedDays: number;

    constructor(name?: string, age?: number, gender?: string, previousOrg: string = "The School of Life", skipped: number = 0) {
        super(name, age, gender);
        this._previousOrgaization = previousOrg;
        this._skippedDays = skipped;
    }

    getGoal() {
        console.log("My goal is: Be a junior software developer.");
    }

    protected specific(): string{
        return " from " + this._previousOrgaization + " who skipped "
        + this._skippedDays + " days from the course already.";
    }

    skipDays(numberOfDays?){
        if (numberOfDays){
            this._skippedDays += numberOfDays;
        } else{
            this._skippedDays++;
        }
    }
}

let student1 = new Student;

student1.introduce()
