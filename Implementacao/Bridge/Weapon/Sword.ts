import { Character } from "../Character/CharacterAbstract";
import { Weapon } from "./WeaponInterface";

export class Sword extends Weapon{
    constructor(character: Character) {
        super(character)
        this.damage=5;
    }


    FastAtack(enemy: Character): void {
        console.log(`Deals ${this.damage}`)
        enemy.Hitted(this.damage)
    }

    StrongAtack(enemy: Character): void {
        console.log(`Deals ${this.damage*2.5} but it takes 2 turns`)
        enemy.Hitted(this.damage*2.5)
    }
    
    Defend(): void {
        console.log(`Defend ${this.damage*0.75}`)
        this.character.Heals(this.damage*0.75)
    }
}