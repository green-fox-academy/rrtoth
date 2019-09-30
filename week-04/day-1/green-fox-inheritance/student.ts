import { Person } from "./person"

export class Student extends Person {
    previousOrgaization: string;
    skippedDays: number;

    constructor(name?: string, age?: number, gender?: string, previousOrg: string = "The School of Life", skipped: number = 0) {
        super(name, age, gender);
        this.previousOrgaization = previousOrg;
        this.skippedDays = skipped;
    }

    goal(){
        return "My goal is: Be a junior software developer."
    }

    protected specific(): string {
        return " from " + this.previousOrgaization + " who skipped "
            + this.skippedDays + " days from the course already";
    }

    skipDays(numberOfDays?) {
        if (numberOfDays) {
            this.skippedDays += numberOfDays;
        } else {
            this.skippedDays++;
        }
    }
}