import { GameComponent } from "../Interface/IGame";

export class Game implements GameComponent {
    
    constructor(private readonly title: string, private readonly genre: string) {}

    play() {
        console.log(`Playing ${this.title}`)
    }
    
    add(game: GameComponent) {
        throw new Error("Cannot add a game to a leaf");
    }
    
    remove(game: GameComponent) {
        throw new Error("Cannot remove a game to a leaf");
    }
}