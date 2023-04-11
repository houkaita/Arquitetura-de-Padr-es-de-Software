import { Enemy } from "./IEnemy";

export class PiranhaPlant implements Enemy {
    render(x: number, y: number) {
      console.log(`Rendering Piranha Plant at (${x}, ${y})`);
    }
  }