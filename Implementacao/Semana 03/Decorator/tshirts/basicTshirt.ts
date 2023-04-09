import { TShirt } from "./interfaceTshirt";

export class BasicTShirt implements TShirt {
    getDescription(): string {
        return 'Camisa básica'
    }

    getPrice(): number {
        return 10;
    }
}