import { Persona } from "./Personas/Concrete/Persona";
import { PersonaRegistry } from "./Personas/Concrete/PersonaRegistry";

const arsene = new Persona('Arsene', 3, 'Fool');
const izanagi = new Persona('Izanagi', 5, 'Fire');
PersonaRegistry.addPersona('Arsene', arsene);
PersonaRegistry.addPersona('Izanagi', izanagi);

console.log('Original')
console.log(arsene)
console.log(izanagi)
console.log('\n')

const arseneClone = PersonaRegistry.getPersona('Arsene');
const izanagiClone = PersonaRegistry.getPersona('Izanagi');
console.log('Clone')
console.log(arseneClone); 
console.log(izanagiClone);