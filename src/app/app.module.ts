import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProfilecomponentComponent } from "./profilecomponent/profilecomponent.component";
import { EditcomponentComponent } from "./editcomponent/editcomponent.component";

@NgModule({
  declarations: [
    AppComponent,
    ProfilecomponentComponent,
    EditcomponentComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
