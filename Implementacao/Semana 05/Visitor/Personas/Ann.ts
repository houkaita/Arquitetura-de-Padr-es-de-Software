import { Visitor } from "../Visitors/IVisitor";
import { Persona } from "./APersona";

export class Ann extends Persona {
    accept(visitor: Visitor): void {
        visitor.visitAnn(this)
    }
}