import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth/auth.service";
import { User } from "src/app/utils/interfaces/user";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"],
})
export class DropdownComponent {
  @Input() user: User | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  click() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
}
