import { Persona } from "../Interfaces/IPersona";
import { PhantomThief } from "../Interfaces/IPhantomThief";
import { PhantomThiefs } from "./PhantomThief";

export class Personas implements Persona {
    private thieves: PhantomThief[] = [];
  
    public addThief(thief: PhantomThief): void {
      this.thieves.push(thief);
    }
  
    public notify(sender: PhantomThief, event: string): void {
      this.thieves.forEach((thief) => {
        if (thief !== sender) {
          thief.defend(event);
        }
      });
    }
  }