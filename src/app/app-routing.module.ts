import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { FirstAppModule } from './first-app/first-app.module';
import { FirstAppPageComponent } from './first-app/first-app-page/first-app-page.component';
import { CatPromiseComponent } from './first-app/tutorial-book/cat-promise/cat-promise.component';
import { AnimationPageComponent } from './first-app/tutorial-book/animation-page/animation-page.component';

const routes: Routes = [
  {path:'Page', component: FirstAppPageComponent,
    children:[
      {path:'Cat', component: CatPromiseComponent},
      {path:'Animations', component: AnimationPageComponent},
      {path:'**', component: ErrorPageComponent}
    ]
        
}, 
  {path:'**', component: ErrorPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            FirstAppModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
