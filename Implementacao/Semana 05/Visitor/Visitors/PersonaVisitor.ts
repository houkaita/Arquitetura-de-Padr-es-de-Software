import { Ann } from "../Personas/Ann";
import { Joker } from "../Personas/Joker";
import { Ryuiji } from "../Personas/Ryuiji";
import { Visitor } from "./IVisitor";

export class PersonaVisitor implements Visitor {
    visitJoker(joker: Joker): void {
        console.log(`${joker.getName()} has the ${joker.getPersona()} persona`)
    }

    visitAnn(ann: Ann): void {
        console.log(`${ann.getName()} has the ${ann.getPersona()} persona`)
    }

    visitRyuji(ryuiji: Ryuiji): void {
        console.log(`${ryuiji.getName()} has the ${ryuiji.getPersona()} persona`)
    }
}