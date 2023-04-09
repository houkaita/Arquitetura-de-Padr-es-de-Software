import { TShirt } from './interfaceTshirt'

export class DecoratorTShirt implements TShirt {
    protected tshirt: TShirt;

    constructor(tshirt: TShirt) {
        this.tshirt = tshirt
    }

    getDescription(): string {
        return this.tshirt.getDescription()
    }

    getPrice(): number {
        return this.tshirt.getPrice()
    }
}