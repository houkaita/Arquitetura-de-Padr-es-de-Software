export class AuthenticationRequest {
    constructor(
      public username: string,
      public password: string,
      public role: string
    ) {}
}