import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstAppPageComponent } from './first-app-page/first-app-page.component';
import { SecondAppPageComponent } from './second-app-page/second-app-page.component';



const routes:Routes = [
 {
  path:'',
  component: FirstAppPageComponent,
  loadChildren: ()=> import('./tutorial-book/tutorial-book.module').then(m=> m.TutorialBookModule)
 },
 {
  path:'secondAppPage',
  component: SecondAppPageComponent
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
  ],
  bootstrap:[
    FirstAppPageComponent,
    SecondAppPageComponent
  ]
})
export class FirstAppRouteModule { }
