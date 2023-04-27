import { LocalStorageService } from "./../../services/localStorage/localStorage.service";
import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/utils/interfaces/user";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  @Input() showButton = false;
  @Input() dark = false;

  user: User | null;

  currentDate: Date = new Date();
  isDropdownVisible = false;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    this.user = this.localStorageService.getUserData();
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
