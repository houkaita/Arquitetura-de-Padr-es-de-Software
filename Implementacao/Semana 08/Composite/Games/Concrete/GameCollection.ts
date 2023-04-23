import { GameComponent } from "../Interface/IGame";

export class GameCollection implements GameComponent {
    private readonly games: GameComponent[] = [];

    play() {
        console.log(`Playing ${this.games.length} games in the ${this.constructor.name}`)
        this.games.forEach(game=>game.play());
    }

    add(game: GameComponent) {
        this.games.push(game);
    }

    remove(game: GameComponent) {
        const index=this.games.indexOf(game);
        if(index!=0) {
            this.games.splice(index,1);
        }
    }
    
}