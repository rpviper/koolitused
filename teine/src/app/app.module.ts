import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { KoduComponent } from './kodu/kodu.component';
import { UudisedComponent } from './uudised/uudised.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { MeistComponent } from './meist/meist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    KoduComponent,
    UudisedComponent,
    KontaktComponent,
    MeistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
