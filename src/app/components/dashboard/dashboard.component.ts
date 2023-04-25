import { AuthService } from "src/app/services/auth.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  constructor(private authService: AuthService) {}

  click() {
    this.authService.logout();
  }
}
