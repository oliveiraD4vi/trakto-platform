import { AuthService } from "src/app/services/auth.service";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(["/login"]);
      return false;
    }

    return true;
  }
}
