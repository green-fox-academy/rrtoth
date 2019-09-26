export class Pirate {
    drunk: number;
    alive: boolean;
    awake: boolean;
    parrot: boolean;

    constructor(drunk: number = 0, alive: boolean = true, awake: boolean = true, parrot: boolean = false) {
        this.drunk = drunk;
        this.alive = alive;
        this.awake = awake;
        this.parrot = parrot;
    }

    public drinkSomeRum(a?: number): void {
        this.wakeUp();
        if (this.alive == true) {
            if (a) {
                this.drunk += a;
            } else {
                this.drunk++;
            }
        } else {
            console.log("he's dead");
        }
        if (this.drunk >= 4) {
            this.awake = false;
        }
    }

    public howsItGoingMate() {
        this.wakeUp();
        if (this.alive == true) {
            if (this.drunk >= 0 && this.drunk <= 4) {
                console.log("Pour me anudder!");
            } else {
                console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
                this.awake = false;
            }
        } else {
            console.log("he's dead");
        }

    }

    public die() {
        this.alive = false;
    }

    public brawl(enemy: Pirate) {
        this.wakeUp();

        let chance = Math.random() * 2;
        let chanceWithParrot = Math.random() * 3;


        if (this.alive == true) {
            if (enemy.alive == true) {
                if (enemy.awake == true) {
                    if (this.parrot == false) {
                        if (chance == 0) {
                            enemy.alive = false;
                            console.log("he won")
                            if (enemy.parrot == true) {
                                enemy.parrot = false;
                                this.parrot = true;
                            }
                        } else if (chance == 1) {
                            this.alive = false;
                            console.log("he lost and died")
                        } else {
                            enemy.awake = false;
                            this.awake = false;
                            console.log("they both passed out")
                        }
                    } else {
                        if (chanceWithParrot <= 1) {
                            enemy.alive = false;
                            console.log("he won")
                            if (enemy.parrot == true) {
                                enemy.parrot = false;
                                this.parrot = true;
                            }
                        } else if (chanceWithParrot == 2) {
                            this.alive = false;
                            console.log("he lost and died")
                        } else {
                            enemy.awake = false;
                            this.awake = false;
                            console.log("they both passed out")
                        }
                    }
                } else {
                    enemy.alive = false;
                    if(enemy.parrot == true){
                        enemy.parrot = false;
                        this.parrot = true;
                    }
                }
            } else {
                console.log("he can't fight back, he's already dead")
            }
        } else {
            console.log("he can't fight, he's dead");
        }
    }
    
    public wakeUp() {
        if (this.awake == false) {
            this.awake = true;
            this.drunk = 0;
        }
    }
}

// Pirates
// Create a Pirate class. While you can add other fields and methods, you must have these methods:-

// drinkSomeRum() - intoxicates the Pirate some
// howsItGoingMate() - when called, the Pirate replies, if drinkSomeRun was called:-
// 0 to 4 times, "Pour me anudder!"
// else, "Arghh, I'ma Pirate. How d'ya d'ink its goin?", the pirate passes out and sleeps it off.
// If you manage to get this far, then you can try to do the following. - die() - this kills off the pirate, in which case, DrinkSomeRum, etc. just result in he's dead. - brawl(x) - where pirate fights another pirate (if that other pirate is alive) and there's a 1/3 chance, 1 dies, the other dies or they both pass out.

// And... if you get that far...

// Add a parrot.