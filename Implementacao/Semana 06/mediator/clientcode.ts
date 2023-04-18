import { Personas } from "./ConcreteObjects/Persona";
import { PhantomThiefs } from "./ConcreteObjects/PhantomThief";

const personas = new Personas();

const joker = new PhantomThiefs("Joker", personas);
const ann = new PhantomThiefs("Ann", personas);

personas.addThief(joker);
personas.addThief(ann);

joker.attack("Shadow");
ann.attack("Shadow");