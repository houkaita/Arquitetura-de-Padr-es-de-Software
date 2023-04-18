export abstract class Burger {
    public prepare(): void {
      this.addBun();
      this.addSalad();
      this.addMeat();
      this.addCheese();
      this.addCondiments();
    }
  
    protected addBun(): void {
      console.log("Adding a bun to the burger.");
    }
  
    protected addSalad(): void {
      console.log("Adding salad to the burger.");
    }
  
    protected abstract addMeat(): void;
  
    protected abstract addCheese(): void;
  
    protected addCondiments(): void {
      console.log("Adding condiments to the burger.");
    }
  }