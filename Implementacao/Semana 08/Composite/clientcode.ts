import { Game } from "./Games/Concrete/Game";
import { GameCollection } from "./Games/Concrete/GameCollection";
import { GameSeries } from "./Games/Concrete/GameSeries";

const actionGames = new GameCollection();
actionGames.add(new Game('Max Payne', 'Action'));
actionGames.add(new Game('GTA V', 'Action'));
actionGames.add(new Game('Doom', 'Action'));

const adventureGames = new GameCollection();
adventureGames.add(new Game('Assassin\'s Creed', 'Adventure'));
adventureGames.add(new Game('The Legend of Zelda', 'Adventure'));

const allGames = new GameCollection();
allGames.add(actionGames);
allGames.add(adventureGames);

const marioGames = new GameSeries('Super Mario', 'Platformer');
marioGames.add(new Game('Super Mario Bros.', 'Platformer'));
marioGames.add(new Game('Super Mario 64', 'Platformer'));

const hollowKnight = new Game('Hollow Knight', 'Metroidvania')

adventureGames.play()
console.log('\n')
marioGames.play()
console.log('\n')
hollowKnight.play()
console.log('\n')
actionGames.play()
//hollowKnight.add(new Game('Silksong', 'Metroidvania'))