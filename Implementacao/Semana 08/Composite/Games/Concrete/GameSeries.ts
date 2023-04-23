import { GameCollection } from "./GameCollection";

export class GameSeries extends GameCollection {
    constructor(private readonly title: string, private readonly genre: string) {
        super();
    }

    play() {
        console.log(`Playing ${this.title} - ${this.genre} series`);
        super.play();
    }
}