import { Weapon } from "./WeaponInterface";

export class Shield implements Weapon{
    getName(): string {
        return "Shield"
    }
    damage(): number {
        return 5;
    }
}