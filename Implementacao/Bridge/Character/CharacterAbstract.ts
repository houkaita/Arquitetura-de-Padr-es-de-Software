export abstract class Character {
    name: String;
    life: number;

    constructor(name: String) {
        this.name=name;
    }
    
    public Hitted(damage: number): void {
        this.life=this.life-damage;
        if(this.life<0) {
            this.life=0;
            console.log(`${this.name} died XD`)
        }

        console.log(`${this.name} was hitted by ${damage} damage now i have ${this.life} of life left`)
    }

    public Heals(defense: number): void {
        this.life=this.life+defense;
        console.log(`${this.name} was defended by ${defense} damage now i have ${this.life} of life left`)
    }

    public passive(): void {}
} 