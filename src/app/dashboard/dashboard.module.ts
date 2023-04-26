import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { HeaderComponent } from "../components/header/header.component";
import { DropdownComponent } from "../components/dropdown/dropdown.component";

@NgModule({
  declarations: [DashboardComponent, HeaderComponent, DropdownComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
