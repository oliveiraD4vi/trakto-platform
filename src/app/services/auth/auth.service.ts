import { LocalStorageService } from "./../localStorage/localStorage.service";
import { CookiesService } from "../cookies/cookies.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { URL } from "src/app/utils/constants/constants";
import { User } from "src/app/utils/interfaces/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private cookiesService: CookiesService,
    private localStorageService: LocalStorageService,
    private http: HttpClient
  ) {}

  login(email: string | null, password: string | null): Observable<User> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });

    return this.http.post<User>(
      `${URL.API_URL}/auth/signin`,
      { email, password },
      { headers }
    );
  }

  logout(): void {
    this.cookiesService.clearTokens();
    this.localStorageService.clearUserData();
  }
}
