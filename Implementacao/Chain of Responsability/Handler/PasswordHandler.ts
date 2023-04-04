import { BaseHandler } from "./BaseHandler";
import { AuthenticationRequest } from "../Athentification/AuthRequest";

export class PasswordHandler extends BaseHandler {
    public handle(request: AuthenticationRequest): boolean {
      if (request.password !== "password") {
        console.log("Invalid password");
        return false;
      }
      return super.handle(request);
    }
  }