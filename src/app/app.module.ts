import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from "./material/material.module";
import { MattogglebuttonComponent } from './mattogglebutton/mattogglebutton.component';
import { MaticonmoduleComponent } from './maticonmodule/maticonmodule.component';

@NgModule({
  declarations: [
    AppComponent,
    MattogglebuttonComponent,
    MaticonmoduleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
