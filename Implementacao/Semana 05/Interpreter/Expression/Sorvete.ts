import { Expression } from "./IExpression";

export class IceCreamExpression extends Expression {
    interpret(): string {
      return "sorvete";
    }
  }