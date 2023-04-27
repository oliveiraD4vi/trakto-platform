import { LocalStorageService } from "./../../services/localStorage/localStorage.service";
import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { EMPTY } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { AuthService } from "../../services/auth/auth.service";
import { CookiesService } from "../../services/cookies/cookies.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  loading = false;
  loginFailed = false;

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(
    private cookiesService: CookiesService,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  onSubmit() {
    this.disableFields();

    this.authService
      .login(
        this.loginForm?.get("email")!.value,
        this.loginForm?.get("password")!.value
      )
      .pipe(
        tap(data => {
          this.cookiesService.setTokens(data.access_token, data.refresh_token);
          this.localStorageService.setUserData(data);
          this.router.navigate(["/dashboard"]);
        }),
        catchError(() => {
          this.clearFields();
          this.enableFields();
          this.loginFailed = true;
          return EMPTY;
        })
      )
      .subscribe();
  }

  clearFields() {
    this.loginForm.reset();
  }

  disableFields() {
    this.loading = true;
    this.loginForm.disable();
  }

  enableFields() {
    this.loading = false;
    this.loginForm.enable();
  }
}
