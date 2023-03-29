import { Character } from "../Character/CharacterAbstract";

export abstract class Weapon {
    private character: Character;

    constructor(character: Character) {
        this.character=character
    }

    
}