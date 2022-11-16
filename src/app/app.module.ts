import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaseRoutingModule } from './router/base-routing.module';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BaseRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
