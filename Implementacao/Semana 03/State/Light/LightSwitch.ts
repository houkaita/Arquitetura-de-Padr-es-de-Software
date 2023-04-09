import { Light } from "./LightInterface";
import { OffState } from "./StateObject/OffState";
import { OnState } from "./StateObject/OnState";

export class LightSwitch {
    private _state: Light;

    constructor(state: Light) {
        this._state=state
    }

    public get state(): Light {
        return this.state
    }

    public set state(state: Light) {
        this.state=state
    }

    public toggle(): void {
        this._state.toggle()

        if(this._state instanceof OnState) {
            this._state= new OffState()
        }
        else {
            this._state= new OnState()
        }
    }
}