import { ICaixaRegistradora } from "./InterfaceCaixa";

export class CaixaRegistradora implements ICaixaRegistradora {
    withdraw(amount: number): void {
        console.log(`Retirou $${amount}`)
    }
}       