import { CookiesService } from "src/app/services/cookies.service";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class LoginGuard {
  constructor(private cookiesService: CookiesService, private router: Router) {}

  canActivate(): boolean {
    if (this.cookiesService.isAuthenticated()) {
      this.router.navigate(["/dashboard"]);
      return false;
    }

    return true;
  }
}
