import { CookiesService } from "./cookies.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private apiUrl = "https://api.trakto.io";

  constructor(
    private cookiesService: CookiesService,
    private http: HttpClient,
    private router: Router
  ) {}

  login(email: string | null, password: string | null): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(
      `${this.apiUrl}/auth/signin`,
      { email, password },
      { headers }
    );
  }

  logout(): void {
    this.cookiesService.clearTokens();
    this.router.navigate(["/login"]);
  }
}
