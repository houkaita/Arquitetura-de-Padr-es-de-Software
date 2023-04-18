import { Burger } from "../Abstrata/ABurguer";

export class BeefBurger extends Burger {
    protected addMeat(): void {
      console.log("Adding beef to the burger.");
    }
  
    protected addCheese(): void {
      console.log("Adding cheese to the burger.");
    }
  }