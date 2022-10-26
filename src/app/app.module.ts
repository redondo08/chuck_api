import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChuckModule } from "./chuck/chuck.module"; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ChuckModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
