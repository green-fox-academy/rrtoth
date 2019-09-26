import { Ship } from "./ship"

class Armada {
    ships: Ship[];

    fillArmada() {
        let a = Math.random() * 10;

        for (let i = 0; i < a; i++) {
            this.ships.push(new Ship);
        }
    }

    war(enemyArmada: Armada) {
        let a: number = 0;
        if (this.ships.length > enemyArmada.ships.length) {
            a = enemyArmada.ships.length;
        } else {
            a = this.ships.length;
        }

        // this.ships[0].battle(enemyArmada.ships[0]);
        // for (let i = 0; i < a; i++) {
        //     if (this.ships[i].score > enemyArmada.ships[0].score) {
        //         this.ships[0].battle(enemyArmada.ships[0])
        //     }

        //     if (this.ships.length > enemyArmada.ships.length) {
        //         a = enemyArmada.ships.length;
        //     } else {
        //         a = this.ships.length;
        //     }
        // }
    }
}
//war: winner battles next enemy, "a" has to be adjusted, iterate separately 



// Create an Armada class
// Contains Ship-s as a list
// Have a armada.war(otherArmada) method where two armada can engage in war
// it should work like merge sort
// first ship from the first armada battles the first of the other
// the loser gets skipped so the next ship comes in play from that armada
// whichever armada gets to the end of its ships loses the war
// return true if this is the winner