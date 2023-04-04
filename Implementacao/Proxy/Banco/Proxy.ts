import { CaixaRegistradora } from "./CaixaReal";
import { ICaixaRegistradora } from "./InterfaceCaixa";

export class Proxy implements ICaixaRegistradora {
    private caixaRegistradora: CaixaRegistradora;
  
    constructor(caixaRegistradora: CaixaRegistradora) {
      this.caixaRegistradora = caixaRegistradora;
    }

    public withdraw(amount: number): void {
        if (this.checarSaldo(amount)) {
          this.caixaRegistradora.withdraw(amount);
          this.atualizarSaldo(amount);
        } else {
          console.log("Sem grana irmão");
        }
    }

    private checarSaldo(amount: number): boolean {
        const saldo = 1000;
        return saldo >= amount;
    }
    
      private atualizarSaldo(amount: number): void {
        const saldo = 1000;
        console.log(`Depois da retirada seu dinheiro é $${saldo - amount}`);
    }
}