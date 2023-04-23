import { Persona } from "./Persona";

export class PersonaRegistry {
    private static personas: {[key: string]: Persona} = {};

    public static getPersona(name: string): Persona {
        return this.personas[name].clone();
    }

    public static addPersona(name: string, persona: Persona) {
        this.personas[name] = persona;
    }
}