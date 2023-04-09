import { Light } from "../LightInterface";

export class OnState implements Light {
    toggle(): void {
        console.log('Ligando as luzes')
    }
}