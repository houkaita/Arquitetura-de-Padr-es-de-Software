import { BaseHandler } from "./BaseHandler";
import { AuthenticationRequest } from "../Athentification/AuthRequest";

export class RoleHandler extends BaseHandler {
    public handle(request: AuthenticationRequest): boolean {
      if (request.role !== "admin") {
        console.log("User is not an administrator");
        return false;
      }
      return super.handle(request);
    }
  }