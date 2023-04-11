import { Goomba } from "../Enemies/Goomba";
import { PiranhaPlant } from "../Enemies/PiranhaPlant";
import { KoopaTroopa } from "../Enemies/KoopaTroopa";
import { Enemy } from "../Enemies/IEnemy";

export class EnemyFlyweightFactory {
    private flyweights: { [key: string]: Enemy } = {};
  
    getEnemy(enemyType: string): Enemy {
      if (!this.flyweights[enemyType]) {
        switch (enemyType) {
          case 'Goomba':
            this.flyweights[enemyType] = new Goomba();
            break;
          case 'Koopa Troopa':
            this.flyweights[enemyType] = new KoopaTroopa();
            break;
          case 'Piranha Plant':
            this.flyweights[enemyType] = new PiranhaPlant();
            break;
        }
      }
      return this.flyweights[enemyType];
    }
  }
  