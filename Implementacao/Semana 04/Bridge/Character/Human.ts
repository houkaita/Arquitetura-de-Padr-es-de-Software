import { Character } from "./CharacterAbstract";
import { Weapon } from "../Weapon/WeaponInterface";

export class Human extends Character {
    constructor(name: string, weapon: Weapon) {
        super(name, weapon);
        this.life=20;
    }

    public passive(): void {
        console.log("Bonus of +5 in inteligence")
    }
}