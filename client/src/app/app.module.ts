import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
//Components
import { NavComponent } from "./components/nav/nav.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
//Module
import { MaterialModule } from "./material/material.module";

@NgModule({
  declarations: [AppComponent, routingComponents, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
