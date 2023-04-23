import { Morgana } from "./Concrete/Morgana";
import { ICat } from "./Interface/ICat";

export class CatAdaptee implements ICat {
    private morgana: Morgana;

    constructor(morgana: Morgana) { this.morgana=morgana }

    purr(): void {
       this.morgana.meow()
    }
    sleep(): void {
        this.morgana.sleep()
    }
    playWithBall(): void {
        this.morgana.useItem("Ball")
    }
    
}