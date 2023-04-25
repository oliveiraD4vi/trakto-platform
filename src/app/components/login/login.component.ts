import { Component } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

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

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.loading = true;

    try {
      this.authService.login();
      this.router.navigate(["/dashboard"]);
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  }

  validateEmail() {
    if (this.loginForm.get("email")?.invalid) {
      this.loginForm.get("email")?.markAsTouched();
    }
  }

  convertToFormControl(absCtrl: AbstractControl | null): FormControl {
    const ctrl = absCtrl as FormControl;
    return ctrl;
  }
}
