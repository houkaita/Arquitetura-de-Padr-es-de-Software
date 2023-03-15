import { Vehicle } from "./vehicle";

export class Motocycle implements Vehicle {
    constructor(private name: string) {}

    pickUp(customerName: string): void {
        console.log(`A moto ${this.name} está a caminho de buscar ${customerName}`)
    }

    stop(): void {
        console.log(`Seu motorista da moto ${this.name} chegou até você`)
    }
}