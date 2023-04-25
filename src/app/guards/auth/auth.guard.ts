import { CookiesService } from "../../services/cookies.service";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuard {
  constructor(private cookiesService: CookiesService, private router: Router) {}

  canActivate(): boolean {
    if (!this.cookiesService.isAuthenticated()) {
      this.router.navigate(["/login"]);
      return false;
    }

    return true;
  }
}
