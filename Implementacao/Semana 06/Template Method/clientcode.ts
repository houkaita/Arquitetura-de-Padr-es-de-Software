import { BeefBurger } from "./Hamburguers/NormalBurguer";
import { VeggieBurger } from "./Hamburguers/VeggieBurguer";

const veggieBurger = new VeggieBurger();
console.log("Preparing a veggie burger:");
veggieBurger.prepare();

const beefBurger = new BeefBurger();
console.log("\nPreparing a beef burger:");
beefBurger.prepare();