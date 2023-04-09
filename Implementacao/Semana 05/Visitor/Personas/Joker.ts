import { Visitor } from "../Visitors/IVisitor";
import { Persona } from "./APersona";

export class Joker extends Persona {
    accept(visitor: Visitor): void {
        visitor.visitJoker(this)
    }
}