import { Character } from "./CharacterAbstract";

export class Human extends Character {
    constructor(name: String) {
        super(name);
        this.life=20
    }

    public passive(): void {
        console.log("Bonus of +5 in inteligence")
    }
}