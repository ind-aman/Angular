import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';




const routes: Routes = [
  {path: '', redirectTo: '/firstApp', pathMatch:'full'},
  {path:'firstApp', loadChildren: ()=> import('./first-app/first-app.module').then(m=> m.FirstAppModule)},
  {path:'**', component: ErrorPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
