import { Character } from "../Character/CharacterAbstract";
import { Weapon } from "./WeaponInterface";

export class Shield extends Weapon{
    constructor(character: Character) {
        super(character)
        this.damage=4;
    }


    FastAtack(enemy: Character): void {
        console.log(`Deals ${this.damage}`)
        enemy.Hitted(this.damage)
    }

    StrongAtack(enemy: Character): void {
        console.log(`Deals ${this.damage*2.2} but takes 2 turns`)
        enemy.Hitted(this.damage*2.5)
    }
    
    Defend(): void {
        console.log(`Defend ${this.damage*1.5}`)
        this.character.Heals(this.damage*1.5)
    }
}