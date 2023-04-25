import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { EMPTY } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { AuthService } from "src/app/services/auth.service";
import { CookiesService } from "src/app/services/cookies.service";

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
        tap(response => {
          this.cookiesService.setTokens(
            response.access_token,
            response.refresh_token
          );
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
