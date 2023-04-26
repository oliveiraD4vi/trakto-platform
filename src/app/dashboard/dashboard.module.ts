import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { HomeComponent } from "../components/home/home.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { HeaderComponent } from "../components/header/header.component";
import { DropdownComponent } from "../components/dropdown/dropdown.component";

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    DropdownComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
