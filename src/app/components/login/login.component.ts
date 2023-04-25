import { Component } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { AuthService } from "src/app/services/auth.service";
import { CookiesService } from "src/app/services/cookies.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  email: string | undefined;
  password: string | undefined;
  loading = false;

  loginForm = new FormGroup({
    email: new FormControl({ value: "", disabled: this.loading }, [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl({ value: "", disabled: this.loading }, [
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
    this.loading = true;

    this.authService
      .login(this.email, this.password)
      .pipe(
        tap(response => {
          this.cookiesService.setTokens(
            response.access_token,
            response.refresh_token
          );
          this.router.navigate(["/dashboard"]);
          this.loading = false;
        }),
        catchError(() => {
          this.loading = false;
          return of(null);
        })
      )
      .subscribe();
  }

  validateEmail() {
    if (this.loginForm.get("email")?.invalid) {
      this.loginForm.get("email")?.markAsTouched();
    }
  }

  convertToFormControl(absCtrl: AbstractControl | null): FormControl {
    return absCtrl as FormControl;
  }
}
