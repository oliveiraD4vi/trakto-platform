import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./guards/auth/auth.guard";
import { LoginGuard } from "./guards/login/login.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  {
    path: "login",
    pathMatch: "full",
    component: LoginComponent,
    canActivate: [LoginGuard],
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then(m => m.DashboardModule),
    canActivate: [AuthGuard],
  },
  {
    path: "**",
    redirectTo: "/login",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
