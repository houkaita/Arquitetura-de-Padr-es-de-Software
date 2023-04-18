import { Persona } from "../Interfaces/IPersona";
import { PhantomThief } from "../Interfaces/IPhantomThief";

export class PhantomThiefs implements PhantomThief {
    private persona: Persona;
    private name: string;
  
    constructor(name: string, persona: Persona) {
      this.name = name;
      this.persona = persona;
    }
  
    public setPersona(persona: Persona): void {
      this.persona = persona;
    }
  
    public attack(enemy: string): void {
      console.log(`${this.name} attacks ${enemy}!`);
      this.persona.notify(this, enemy);
    }
  
    public defend(enemy: string): void {
      console.log(`${this.name} defends against ${enemy}!`);
    }
  }