import { Character } from "../Character/CharacterAbstract";
import { Weapon } from "./WeaponInterface";

export class Axe extends Weapon{
    constructor(character: Character) {
        super(character)
        this.damage=5;
    }


    FastAtack(enemy: Character): void {
        console.log(`Deals ${this.damage}`)
        enemy.Hitted(this.damage)
    }

    StrongAtack(enemy: Character): void {
        console.log(`Deals ${this.damage*3} but takes 2 turns`)
        enemy.Hitted(this.damage*3)
    }
    
    Defend(): void {
        console.log(`Defend ${this.damage*0.5}`)
        this.character.Heals(this.damage*0.5)
    }
}