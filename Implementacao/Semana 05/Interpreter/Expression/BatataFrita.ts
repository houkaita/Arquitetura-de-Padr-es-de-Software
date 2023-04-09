import { Expression } from "./IExpression";

export class FrenchFriesExpression extends Expression {
    interpret(): string {
      return "batatas fritas";
    }
  }