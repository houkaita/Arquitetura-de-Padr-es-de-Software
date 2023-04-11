import { Enemy } from "./IEnemy";

export class KoopaTroopa implements Enemy {
    render(x: number, y: number) {
      console.log(`Rendering Koopa Troopa at (${x}, ${y})`);
    }
  }