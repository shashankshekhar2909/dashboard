import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavComponent } from './_components/_shared/top-nav/top-nav.component';
import { MaterialModule } from 'src/material';
import { BarComponent } from './_components/_partials/d3/bar/bar.component';
import { SideNavComponent } from './_components/_shared/side-nav/side-nav.component';
import { D3Component } from './_components/d3/d3.component';
import { ProfileCardComponent } from './_components/_partials/profile-card/profile-card.component';
import { UsersComponent } from './_components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    BarComponent,
    SideNavComponent,
    D3Component,
    ProfileCardComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
