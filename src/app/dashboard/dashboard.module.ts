import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { HeaderComponent } from "../components/header/header.component";
import { DropdownComponent } from "../components/dropdown/dropdown.component";
import { CoursewareComponent } from "./courseware/courseware.component";
import { CardRenderingComponent } from "./card-rendering/card-rendering.component";
import { AllDesignsComponent } from "./all-designs/all-designs.component";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    DropdownComponent,
    CoursewareComponent,
    CardRenderingComponent,
    AllDesignsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LazyLoadImageModule,
    NgbModule,
  ],
})
export class DashboardModule {}
