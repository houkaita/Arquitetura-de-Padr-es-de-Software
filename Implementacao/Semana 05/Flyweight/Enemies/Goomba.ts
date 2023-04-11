import { Enemy } from "./IEnemy";

export class Goomba implements Enemy {
    render(x: number, y: number) {
      console.log(`Rendering Goomba at (${x}, ${y})`);
    }
  }
   