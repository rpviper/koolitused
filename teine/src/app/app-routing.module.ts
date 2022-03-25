import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KoduComponent } from './kodu/kodu.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { MeistComponent } from './meist/meist.component';
import { UudisedComponent } from './uudised/uudised.component';

const routes: Routes = [
  {path: "", component: KoduComponent},
  {path: "uudised", component: UudisedComponent},
  {path: "kontakt", component: KontaktComponent},
  {path: "meist", component: MeistComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
