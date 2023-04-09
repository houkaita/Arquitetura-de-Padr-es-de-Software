import { AuthenticationRequest } from "../Athentification/AuthRequest";
import { BaseHandler } from "./BaseHandler";

export class UsernameHandler extends BaseHandler {
    public handle(request: AuthenticationRequest): boolean {
      if (request.username !== "admin") {
        console.log("Invalid username");
        return false;
      }
      return super.handle(request);
    }
  }