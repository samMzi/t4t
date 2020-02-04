import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TestComponent } from "./test/test.component";
import { AuthentificationComponent } from "./authentification/authentification.component";
import { SaisiBonComponent } from "./saisi-bon/saisi-bon.component";
import { ExportComponent } from "./export/export.component";
import { ImportComponent } from "./import/import.component";

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
  },
  { path: "test", component: TestComponent },
  { path: "auth", component: AuthentificationComponent },
  { path: "SaisiBon", component: SaisiBonComponent },
  { path: "export", component: ExportComponent },
  { path: "import", component: ImportComponent },
  { path: "", redirectTo: "/auth", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
