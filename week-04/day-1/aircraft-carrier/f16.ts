import { Aircraft } from "./aircrafts"

export class F16 extends Aircraft {

    constructor(ammo: number = 8, baseDamage: number = 30, storage: number = 0, damage: number = 0) {
        super(ammo, baseDamage, storage, damage)
    }
}