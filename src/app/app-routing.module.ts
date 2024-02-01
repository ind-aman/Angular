import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { FirstAppModule } from './first-app/first-app.module';
import { PagesComponent } from './first-app/pages/pages.component';

const routes: Routes = [
  {path:'', component: PagesComponent}, 
  {path:'**', component: ErrorPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            FirstAppModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
