import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { HeaderComponent } from "../components/header/header.component";
import { DropdownComponent } from "../components/dropdown/dropdown.component";
import { CoursewareComponent } from "./courseware/courseware.component";

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    DropdownComponent,
    CoursewareComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
