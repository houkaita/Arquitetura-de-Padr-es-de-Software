import { EnemyFlyweightFactory } from "./Enemy Factory/EnemyFlyweightFactory";

const enemyFactory = new EnemyFlyweightFactory();

const goomba1 = enemyFactory.getEnemy('Goomba');
goomba1.render(10, 10);

const koopa1 = enemyFactory.getEnemy('Koopa Troopa');
koopa1.render(20, 20);

const piranha1 = enemyFactory.getEnemy('Piranha Plant');
piranha1.render(30, 30);

const goomba2 = enemyFactory.getEnemy('Goomba');
goomba2.render(40, 40);
