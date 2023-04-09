import { CastleMemento } from "../Memento/CastleMemento";

export class Castle {
    private currentFloor: number;

    constructor(floor: number) {
        this.currentFloor=floor
    }

    public getFloor(): number {
        return this.currentFloor
    }

    public setFloor(floor: number) {
        this.currentFloor=floor
    }

    public createMemento(): CastleMemento {
        return new CastleMemento(this.currentFloor);
    }

    public restoreFromMemento(memento: CastleMemento) {
        this.currentFloor = memento.getFloor()
    }
}