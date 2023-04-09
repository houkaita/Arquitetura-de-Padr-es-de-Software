import { Visitor } from "../Visitors/IVisitor";
import { Persona } from "./APersona";

export class Ryuiji extends Persona {
    accept(visitor: Visitor): void {
        visitor.visitRyuji(this)
    }
}