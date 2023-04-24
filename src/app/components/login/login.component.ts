import { Component } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

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
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  validateEmail() {
    if (this.loginForm.get("email")?.invalid) {
      this.loginForm.get("email")?.markAsTouched();
    }
  }

  convertToFormControl(absCtrl: AbstractControl | null): FormControl {
    const ctrl = absCtrl as FormControl;
    return ctrl;
  }

  onSubmit() {
    this.loading = true;

    try {
      console.log(this.email, this.password);
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  }
}
