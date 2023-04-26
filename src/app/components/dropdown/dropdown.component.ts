import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth/auth.service";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"],
})
export class DropdownComponent {
  constructor(private authService: AuthService) {}

  click() {
    this.authService.logout();
  }
}
