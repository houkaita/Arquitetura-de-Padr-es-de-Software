import { Character } from "./CharacterAbstract"

export class Human implements Character {
    name: String;
    origin: String;
    age: number;

    constructor(name: String, origin: String, age: number) {
        this.name=name;
        this.origin=origin;
        this.age=age;
    }


    FastAtack(): void {

    }
    StrongAtack(): void {

    }
    Defend(): void {

    }
}