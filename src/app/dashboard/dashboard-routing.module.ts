import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { CoursewareComponent } from "./courseware/courseware.component";
import { AllDesignsComponent } from "./all-designs/all-designs.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: DashboardComponent,
  },
  {
    path: "courseware",
    pathMatch: "full",
    component: CoursewareComponent,
  },
  {
    path: "designs",
    pathMatch: "full",
    component: AllDesignsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
