import { BasicTShirt } from "./tshirts/basicTshirt";
import { ColoredTShirt } from "./tshirts/colored.TShirt";
import { LogoTShirt } from "./tshirts/logoTShirt";

const basicTShirt = new BasicTShirt();

console.log(basicTShirt.getDescription())
console.log(basicTShirt.getPrice())

const logoTShirt = new LogoTShirt(basicTShirt);

console.log(logoTShirt.getDescription())
console.log(logoTShirt.getPrice())

const coloredTShirt = new ColoredTShirt(logoTShirt, 'verde');

console.log(coloredTShirt.getDescription())
console.log(coloredTShirt.getPrice())

const coloredTShirt2 = new ColoredTShirt(basicTShirt, 'vermelho');

console.log(coloredTShirt2.getDescription())
console.log(coloredTShirt2.getPrice())