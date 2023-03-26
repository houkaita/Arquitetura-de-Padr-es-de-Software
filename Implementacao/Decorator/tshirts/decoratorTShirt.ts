import { TShirt } from './interfaceTshirt'

export class DecoratorTShirt implements TShirt {
    protected tshirt: TShirt;

    constructor(tshirt: TShirt) {
        this.tshirt = tshirt
    }

    getDescription(): String {
        return this.tshirt.getDescription()
    }

    getPrice(): number {
        return this.tshirt.getPrice()
    }
}