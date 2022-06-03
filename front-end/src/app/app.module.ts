import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AzureModule } from "./azure/azure.module";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AzureModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
