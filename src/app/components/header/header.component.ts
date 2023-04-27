import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  @Input() showButton = false;
  @Input() dark = false;

  currentDate: Date = new Date();
  isDropdownVisible = false;

  constructor(private router: Router) {}

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  goToHome() {
    this.router.navigate(["/"]);
  }
}
