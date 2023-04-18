import { Burger } from "../Abstrata/ABurguer";

export class VeggieBurger extends Burger {
    protected addMeat(): void {}
  
    protected addCheese(): void {}
}