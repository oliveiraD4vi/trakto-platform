import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: DashboardComponent,
  },
  {
    path: "home",
    pathMatch: "full",
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
