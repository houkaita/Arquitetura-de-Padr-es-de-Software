import { DecoratorTShirt } from "./decoratorTShirt";
import { TShirt } from "./interfaceTshirt";

export class ColoredTShirt extends DecoratorTShirt {
    private color: String;

    constructor (tshirt: TShirt, color: String) {
        super(tshirt)
        this.color = color;
    }

    getDescription(): String {
        return `${super.getDescription()} em ${this.color} `
    }

    getPrice(): number {
        return super.getPrice() + 10
    }
}