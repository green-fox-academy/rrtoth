export class Aircraft {
    maxAmmo: number;
    baseDamage: number;
    ammo: number;
    damage: number

    constructor(ammo: number, baseDamage: number, storage: number = 0, damage: number = 0) {
        this.maxAmmo = ammo;
        this.baseDamage = baseDamage;
        this.ammo = storage;
        this.damage = damage;
    }

    fight(enemy: Aircraft) {
        enemy.damage += this.baseDamage * this.ammo;
        this.ammo = 0;
    }

    refill(num: number) {
        let needs: number = this.maxAmmo - this.ammo

        if (num > needs) {
            this.ammo = this.maxAmmo
            return num - needs;
        } else if (num = needs) {
            this.ammo = this.maxAmmo
        } else {
            this.ammo += num;
        }
    }

}