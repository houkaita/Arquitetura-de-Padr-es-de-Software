import { Character } from "./CharacterAbstract";

export class Elf extends Character {
    constructor(name: String) {
        super(name);
        this.life=15
    }

    public passive(): void {
        console.log("Bonus of +8 in dextirity")
    }
}