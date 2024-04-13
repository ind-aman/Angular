import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { HomepageComponent } from './shared/homepage/homepage.component';




const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component:HomepageComponent},
  {path:'firstApp', loadChildren: ()=> import('./first-app/first-app.module').then(m=> m.FirstAppModule)},
  {path:'**', component: ErrorPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
