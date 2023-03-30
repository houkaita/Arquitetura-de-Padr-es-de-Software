import { Weapon } from "./WeaponInterface";

export class Axe implements Weapon{
    getName(): string {
        return "Axe"
    }
    damage(): number {
        return 15;
    }
}