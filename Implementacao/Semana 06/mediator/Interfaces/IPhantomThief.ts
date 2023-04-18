import { Persona } from "./IPersona";

export interface PhantomThief {
    setPersona(persona: Persona): void;
    attack(enemy: string): void;
    defend(enemy: string): void;
  }