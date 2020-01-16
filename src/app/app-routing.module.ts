import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuyComponent } from './buy/buy.component';
import { RentComponent } from './rent/rent.component';
import { MortgageComponent } from './mortgage/mortgage.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'buy', component: BuyComponent},
  { path: 'rent', component: RentComponent},
  { path: 'mortgage', component: MortgageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
