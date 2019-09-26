import { Pirate } from "./pirate"

export class Ship {
    pirates: Pirate[];
    captain: Pirate;

    public fillShip(): void {
        this.captain = new Pirate;
        this.pirates = [];

        let a = Math.random() * 2;
        if (a == 0) {
            this.captain.parrot = true;
        }

        let b = Math.random() * 50;
        let c = Math.random() * 4;

        for (let i = 0; i < b; i++) {
            this.pirates.push(new Pirate);
            if(c ==0){
                this.pirates[i].parrot = true;
            }
        }
    }

    public addToShip(pirate: Pirate): void {
        this.pirates.push(pirate);
    }

    public shipInfo(): void {
        console.log("The captain of the ship consumed " + this.captain.drunk + " barrels of rum.");

        if (this.captain.alive) {
            if (this.captain.awake) {
                console.log("The captain is awake");
            } else {
                console.log("The captain is passed out");
            }
        } else {
            console.log("The captain is dead");
        }

        let stillThere: number = 0;
        for (let i = 0; i < this.pirates.length; i++) {
            if (this.pirates[i].alive) {
                stillThere++;
            }
        }
        console.log("There are " + stillThere + " pirates in the crew.");
    }

    public battle(enemyShip: Ship) {
        let score = this.pirates.length / this.captain.drunk;
        let enemyScore = enemyShip.pirates.length / enemyShip.captain.drunk;

        if (this.captain.parrot == true) {
            score = score * 2;
        }

        if (enemyShip.captain.parrot == true) {
            enemyScore = enemyScore * 2;
        }

        if (score > enemyScore) {
            for (let i = 0; i < Math.random() * enemyShip.pirates.length; i++) {
                enemyShip.pirates[i].die();
            }
            this.pirates.forEach(e => { e.drinkSomeRum(Math.random() * 4) })
            this.captain.drinkSomeRum(Math.random() * 4);

        } else if (score < enemyScore) {
            for (let i = 0; i < Math.random() * this.pirates.length; i++) {
                this.pirates[i].die();
            }
            enemyShip.pirates.forEach(e => { e.drinkSomeRum(Math.random() * 4) })
            enemyShip.captain.drinkSomeRum(Math.random() * 4);

        } else {
            for (let i = 0; i < Math.random() * enemyShip.pirates.length; i++) {
                enemyShip.pirates[i].die();
            }
            for (let i = 0; i < Math.random() * this.pirates.length; i++) {
                this.pirates[i].die();
            }
        }
    }
}

let ship1 = new Ship();

ship1.fillShip();

ship1.shipInfo();

// The Pirate Ship
// The place for the Pirates

// Create a Ship class.
// The Ship stores Pirate-s instances in a list as the crew and has one captain who is also a Pirate.
// When a ship is created it doesn't have a crew or a captain.
// The ship can be filled with pirates and a captain via fillShip() method.
// Filling the ship with a captain and random number of pirates.
// Ships should be represented in a nice way on command line including information about
// captains consumed rum, state (passed out / died)
// number of alive pirates in the crew
// Ships should have a method to battle other ships: ship.battle(otherShip)
// should return true if the actual ship (this) wins
// the ship should win if its calculated score is higher
// calculate score: Number of Alive pirates in the crew - Number of consumed rum by the captain
// The loser crew has a random number of losses (deaths).
// The winner captain and crew has a party, including a random number of rum :)