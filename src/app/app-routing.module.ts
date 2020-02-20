import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProfilecomponentComponent } from "./profilecomponent/profilecomponent.component";
import { EditcomponentComponent } from "./editcomponent/editcomponent.component";

const routes: Routes = [
  { path: "", redirectTo: "/profile", pathMatch: "full" },
  { path: "profile", component: ProfilecomponentComponent },
  { path: "edit", component: EditcomponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
