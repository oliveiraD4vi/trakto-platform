import { CookiesService } from "../cookies/cookies.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { URL } from "src/app/utils/constants/constants";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private cookiesService: CookiesService,
    private http: HttpClient,
    private router: Router
  ) {}

  login(email: string | null, password: string | null): Observable<object> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });

    return this.http.post(
      `${URL.API_URL}/auth/signin`,
      { email, password },
      { headers }
    );
  }

  logout(): void {
    this.cookiesService.clearTokens();
    this.router.navigate(["/login"]);
  }
}
