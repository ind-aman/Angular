import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CatPromiseComponent } from './cat-promise/cat-promise.component';
import { AnimationPageComponent } from './animation-page/animation-page.component';
import { ErrorPageComponent } from 'src/app/shared/error-page/error-page.component';


const routes: Routes = [
   {
    path:'', redirectTo:'cat', pathMatch: 'full' 
   },
    {
      path:'cat', component: CatPromiseComponent  },
    {
      path:'animation', component: AnimationPageComponent
    },
    {
      path:'**', component: ErrorPageComponent
    }

    
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]

})


export class TutorialBookRoutingModule { }
