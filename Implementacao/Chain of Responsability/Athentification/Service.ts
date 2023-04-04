import { Handler } from "../Handler/IHandler";
import { PasswordHandler } from "../Handler/PasswordHandler";
import { RoleHandler } from "../Handler/RoleHandler";
import { UsernameHandler } from "../Handler/UsernameHandler";
import { AuthenticationRequest } from "./AuthRequest";

export class AuthenticationService {
    private handler: Handler;
  
    constructor() {
      const usernameHandler = new UsernameHandler();
      const passwordHandler = new PasswordHandler();
      const roleHandler = new RoleHandler();
  
      usernameHandler.setNext(passwordHandler).setNext(roleHandler);
  
      this.handler = usernameHandler;
    }
  
    public authenticate(request: AuthenticationRequest): boolean {
      return this.handler.handle(request);
    }
  }