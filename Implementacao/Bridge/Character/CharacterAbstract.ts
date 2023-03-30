import { Weapon } from "../Weapon/WeaponInterface";

export abstract class Character {
    private name: string;
    protected life: number;
    private weapon: Weapon;

    constructor(name: string, weapon: Weapon) {
        this.name=name;
        this.weapon=weapon;
    }

    getName(): string {
        return this.name;
    }

    attack(character: Character): void {
        const damage = this.weapon.damage();
        console.log(`${this.name} attacks ${character.getName()} with ${this.weapon.getName()} for ${damage} damage`)
        character.Hitt(damage)
    }
    
    private Hitt(damage: number): void {
        this.life-=damage;
        console.log(`${this.name} was hitted by ${damage} damage now i have ${this.life} of life left`)

        if(this.life<=0) {
            this.Dead();
        }
    }

    private Dead(): void {
        this.life=0;
        console.log(`${this.name} died XD`)
    }

    public passive(): void {}
} 