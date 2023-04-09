export class CastleMemento {
    private floor: number;

    constructor(floor: number) {
        this.floor=floor
    }

    public getFloor(): number {
        return this.floor
    }
}