import { DecoratorTShirt } from "./decoratorTShirt";
import { TShirt } from "./interfaceTshirt";

export class ColoredTShirt extends DecoratorTShirt {
    private color: string;

    constructor (tshirt: TShirt, color: string) {
        super(tshirt)
        this.color = color;
    }

    getDescription(): string {
        return `${super.getDescription()} em ${this.color} `
    }

    getPrice(): number {
        return super.getPrice() + 10
    }
}