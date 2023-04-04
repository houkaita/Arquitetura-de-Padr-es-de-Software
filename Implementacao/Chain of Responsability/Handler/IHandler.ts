import { AuthenticationRequest } from "../Athentification/AuthRequest";

export interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: AuthenticationRequest): boolean;
  }