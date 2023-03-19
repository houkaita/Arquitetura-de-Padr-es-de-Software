import { Customer } from "../interfaces/customer";
import { Vehicle } from "../interfaces/vehicle";

export class IndividualCar implements Vehicle{
    constructor(public name: string, private readonly customer: Customer) {}

    pickUp(): void {
        console.log(`Sou carro individual é ${this.name} e estou buscando o(a) cliente ${this.customer.name}`)
    }
}