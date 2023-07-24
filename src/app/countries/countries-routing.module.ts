import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { ByCountriePageComponent } from './pages/by-country-page/by-countrie-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';

const routes: Routes = [
    { path: 'by-capital', component: ByCapitalPageComponent },
    { path: 'by-country', component: ByCountriePageComponent },
    { path: 'by-region', component: ByRegionPageComponent },
    { path: 'by/:id', component: CountryPageComponent },
    { path: '**', redirectTo: 'by-capital' }

]


@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})


export class CountriesRoutingModule {

}
