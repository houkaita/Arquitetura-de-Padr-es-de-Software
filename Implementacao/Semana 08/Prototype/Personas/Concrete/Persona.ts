import { Prototype } from "../Interface/Prototype";

export class Persona implements Prototype {
    private name: string;
    private level: number;
    private arcana: string;
    
    constructor(name: string, level: number, arcana: string) {
        this.name=name;
        this.level=level;
        this.arcana=arcana;
    }

    clone() : Persona {
        return new Persona(this.name, this.level, this.arcana)
    }
}