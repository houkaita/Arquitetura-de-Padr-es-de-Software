import { TShirt } from "./interfaceTshirt";

export class BasicTShirt implements TShirt {
    getDescription(): String {
        return 'Camisa básica'
    }

    getPrice(): number {
        return 10;
    }
}