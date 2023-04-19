import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavComponent } from './_components/_shared/top-nav/top-nav.component';
import { MaterialModule } from 'src/material';
import { BarComponent } from './components/_partials/d3/bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
