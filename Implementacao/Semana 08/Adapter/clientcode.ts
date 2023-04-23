import { CatAdaptee } from "./Feline/CatAdaptee";
import { Cat } from "./Feline/Concrete/Cat";
import { Morgana } from "./Feline/Concrete/Morgana";

const morgana = new Morgana();
const cat = new Cat();
const catAdapted = new CatAdaptee(morgana);

console.log('Morgana\n')
morgana.meow();
morgana.sleep();
morgana.useItem('Fish');
console.log('\n')
console.log("The cat\n")
cat.purr(); 
cat.sleep(); 
cat.playWithBall(); 
console.log('\n')
console.log('Morgana adapted to cat\n')
catAdapted.purr(); 
catAdapted.sleep(); 
catAdapted.playWithBall(); 