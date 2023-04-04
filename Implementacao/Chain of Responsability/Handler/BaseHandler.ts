import { AuthenticationRequest } from "../Athentification/AuthRequest";
import { Handler } from "./IHandler";

export class BaseHandler implements Handler {
    private nextHandler?: Handler;
  
    public setNext(handler: Handler): Handler {
      this.nextHandler = handler;
      return handler;
    }
  
    public handle(request: AuthenticationRequest): boolean {
      if (this.nextHandler) {
        return this.nextHandler.handle(request);
      }
      return true;
    }
  }