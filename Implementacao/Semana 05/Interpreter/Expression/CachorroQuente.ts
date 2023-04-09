import { Expression } from "./IExpression";

export class HotDogExpression extends Expression {
    interpret(): string {
      return "cachorro-quente";
    }
  }