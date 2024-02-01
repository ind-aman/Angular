import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatPromiseComponent } from './cat-promise/cat-promise.component';
import { ModelModule } from '../model/model.module';
import { PagesComponent } from './pages/pages.component';
import { RouterModule, Routes } from '@angular/router';
import { TutorialBookModule } from './tutorial-book/tutorial-book.module';

const routes:Routes = [
  {path:'', component: CatPromiseComponent}
]

@NgModule({
  declarations: [
    CatPromiseComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    ModelModule,
    RouterModule.forRoot(routes),
    TutorialBookModule
  ],
  exports:[
    PagesComponent
  ]
})
export class FirstAppModule { }
