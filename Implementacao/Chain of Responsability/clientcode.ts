import { AuthenticationRequest } from "./Athentification/AuthRequest";
import { AuthenticationService } from "./Athentification/Service";

const authService = new AuthenticationService();

const request1 = new AuthenticationRequest("admin", "password", "admin");
const isAuthenticated1 = authService.authenticate(request1);
console.log(`Request 1 is authenticated: ${isAuthenticated1}`);

const request2 = new AuthenticationRequest("admin", "wrongpassword", "user");
const isAuthenticated2 = authService.authenticate(request2);
console.log(`Request 2 is authenticated: ${isAuthenticated2}`);

const request3 = new AuthenticationRequest("user", "password", "admin");
const isAuthenticated3 = authService.authenticate(request3);
console.log(`Request 3 is authenticated: ${isAuthenticated3}`);