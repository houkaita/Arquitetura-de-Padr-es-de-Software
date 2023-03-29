import { Character } from "./CharacterAbstract";

export class Orc extends Character {
    constructor(name: String) {
        super(name);
        this.life=40
    }

    public passive(): void {
        console.log("Bonus of +10 in strong attacks")
    }
}