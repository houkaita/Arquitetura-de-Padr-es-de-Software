import { CastleMemento } from "./CastleMemento";

export class ProgressTracker {
    private mementos: CastleMemento[];

    constructor () {
        this.mementos= []
    }

    public addMemento(memento: CastleMemento) {
        this.mementos.push(memento)
    }

    public getMemento(index: number): CastleMemento {
        return this.mementos[index];
    }
}