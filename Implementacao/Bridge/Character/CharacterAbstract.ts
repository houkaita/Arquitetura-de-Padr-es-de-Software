import { Weapon } from "../Weapon/WeaponInterface";

export abstract class Character {
    private name: string;
    protected life: number;
    private weapon: Weapon;
    protected defense: number=0;

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
    
    Defend(): void {
        this.defense+=this.weapon.defense();
        console.log(`Now my defense is ${this.defense}`)
    }

    private Protect(damage: number): number {
        let currentDefense=this.defense;
        this.defense=this.defense-damage;
        if(currentDefense>damage) return damage=0;
        damage=damage-currentDefense;
        if(this.defense<0) this.defense=0
        return damage
    }
    
    private Hitt(damage: number): void {
        if(this.defense>0) {
            damage=this.Protect(damage);
        }

        this.life-=damage;
        console.log(`${this.name} was hitted by ${damage} damage now i have ${this.life} of life left and ${this.defense} defense`)

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