import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root",
})
export class CookiesService {
  constructor(private cookieService: CookieService) {}

  setTokens(token: string, refreshToken: string) {
    this.cookieService.set("access_token", token);
    this.cookieService.set("refresh_token", refreshToken);
  }

  getToken() {
    return this.cookieService.get("access_token");
  }

  getRefreshToken() {
    return this.cookieService.get("refresh_token");
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  clearTokens() {
    this.cookieService.delete("access_token");
    this.cookieService.delete("refresh_token");
  }
}
