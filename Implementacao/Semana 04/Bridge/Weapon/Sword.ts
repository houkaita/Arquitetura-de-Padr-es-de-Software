import { Weapon } from "./WeaponInterface";

export class Sword implements Weapon{
    getName(): string {
        return "Sword"
    }
    damage(): number {
        return 10;
    }
    defense(): number {
        return 10;
    }
}