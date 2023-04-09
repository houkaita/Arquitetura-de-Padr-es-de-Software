import { Visitor } from "../Visitors/IVisitor";

export abstract class Persona {
    private name: string;
    private persona: string;
    
    constructor(name: string, persona: string) {
        this.name=name;
        this.persona=persona;
    }

    getName(): string {
        return this.name;
    }

    getPersona(): string {
        return this.persona;
    }

    abstract accept (visitor: Visitor): void;
}