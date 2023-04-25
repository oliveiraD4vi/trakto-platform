import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { HomeComponent } from "../components/home/home.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";

@NgModule({
  declarations: [HomeComponent, DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
