import { DecoratorTShirt } from "./decoratorTShirt"

export class LogoTShirt extends DecoratorTShirt {
    getDescription(): String {
        return `${super.getDescription()} com logo`
    }

    getPrice(): number {
        return super.getPrice()+5
    }
}