import { Ann } from "./Personas/Ann";
import { Joker } from "./Personas/Joker";
import { Ryuiji } from "./Personas/Ryuiji";

import { ThiefVisitor } from "./Visitors/ThiefVisitor"
import { PersonaVisitor } from "./Visitors/PersonaVisitor"

const joker = new Joker('Joker', 'Arsene')
const ann = new Ann('Ann', 'Carmen')
const ryuji = new Ryuiji('Ryuiji', 'Captain Kidd')

const thiefvisitor = new ThiefVisitor()
const personavisitor = new PersonaVisitor()

joker.accept(thiefvisitor)
ann.accept(thiefvisitor)
ryuji.accept(thiefvisitor)
console.log('\n')
joker.accept(personavisitor)
ann.accept(personavisitor)
ryuji.accept(personavisitor)