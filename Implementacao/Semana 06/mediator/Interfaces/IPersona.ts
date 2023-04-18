import { PhantomThief } from "./IPhantomThief";

export interface Persona {
    notify(sender: PhantomThief, event: string): void;
  }