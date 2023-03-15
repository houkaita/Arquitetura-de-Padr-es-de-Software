import { Vehicle } from "./vehicle"

export class Bicycle implements Vehicle {
    constructor(private name:string) {}

    pickUp(customerName: string): void {
        console.log(`A bicicleta ${this.name} está buscando ${customerName}`)
    }

    stop(): void {
        console.log(`A bicicleta ${this.name} parou`)
    }
}