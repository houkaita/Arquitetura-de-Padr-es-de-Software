import { IMorgana } from "../Interface/IMorgana";

export class Morgana implements IMorgana {
    meow(): void {
        console.log('Meowwwww')
    }
    sleep(): void {
        console.log('Zzzz....')
    }
    useItem(itemName: string): void {
        console.log(`Morgana uses item ${itemName}`)
    }

}