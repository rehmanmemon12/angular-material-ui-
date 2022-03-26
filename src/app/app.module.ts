import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from "./material/material.module";
import { MattogglebuttonComponent } from './mattogglebutton/mattogglebutton.component';
import { MaticonmoduleComponent } from './maticonmodule/maticonmodule.component';
import { MatbadgesComponent } from './matbadges/matbadges.component';
import { MatProgressSpinnerModuleComponent } from './mat-progress-spinner-module/mat-progress-spinner-module.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {FormsModule} from "@angular/forms";
import { MenusComponent } from './menus/menus.component';
import { MatListComponent } from './mat-list/mat-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MattogglebuttonComponent,
    MaticonmoduleComponent,
    MatbadgesComponent,
    MatProgressSpinnerModuleComponent,
    NavbarComponent,
    SidebarComponent,
    MenusComponent,
    MatListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
