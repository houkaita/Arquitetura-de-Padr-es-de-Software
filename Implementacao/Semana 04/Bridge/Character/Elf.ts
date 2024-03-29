import { Character } from "./CharacterAbstract";
import { Weapon } from "../Weapon/WeaponInterface";

export class Elf extends Character {
    constructor(name: string, weapon: Weapon) {
        super(name, weapon);
        this.life=15
    }

    public passive(): void {
        console.log("Bonus of +8 in dextirity")
    }
}