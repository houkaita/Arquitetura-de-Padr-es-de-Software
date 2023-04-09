import { Light } from "../LightInterface";

export class OffState implements Light {
    toggle(): void {
        console.log('Desligando as luzes')
    }
}