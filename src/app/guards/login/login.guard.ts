import { AuthService } from "./../../services/auth.service";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class LoginGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn) {
      this.router.navigate(["/dashboard"]);
      return false;
    }

    return true;
  }
}
