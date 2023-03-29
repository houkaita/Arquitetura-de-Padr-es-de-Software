import { Character } from "../Character/CharacterAbstract";

export abstract class Weapon {
    character: Character;
    damage: number;

    constructor(character: Character) {
        this.character=character
    }

    FastAtack(enemy: Character): void {}
    StrongAtack(enemy: Character): void {}
    Defend(): void {}
}