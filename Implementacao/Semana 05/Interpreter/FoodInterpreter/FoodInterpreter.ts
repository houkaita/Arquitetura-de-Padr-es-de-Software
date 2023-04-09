import { FrenchFriesExpression } from "../Expression/BatataFrita";
import { HotDogExpression } from "../Expression/CachorroQuente";
import { Expression } from "../Expression/IExpression";
import { IceCreamExpression } from "../Expression/Sorvete";

export class FoodInterpreter {
    private expression: Expression;
  
    interpret(input: string): string {
      switch (input) {
        case "french fries":
          this.expression = new FrenchFriesExpression();
          break;
        case "hot dog":
          this.expression = new HotDogExpression();
          break;
        case "ice cream":
          this.expression = new IceCreamExpression();
          break;
        default:
          throw new Error("Invalid input");
      }
  
      return this.expression.interpret();
    }
  }
  