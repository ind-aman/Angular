import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatPromiseComponent } from './tutorial-book/cat-promise/cat-promise.component';
import { ModelModule } from '../model/model.module';
import { FirstAppPageComponent } from './first-app-page/first-app-page.component';
import { RouterModule, Routes } from '@angular/router';
import { TutorialBookModule } from './tutorial-book/tutorial-book.module';

const routes:Routes = [
  
]

@NgModule({
  declarations: [
    CatPromiseComponent,
    FirstAppPageComponent
  ],
  imports: [
    CommonModule,
    ModelModule,
    RouterModule.forRoot(routes),
    TutorialBookModule
  ],
  exports:[
    FirstAppPageComponent
  ]
})
export class FirstAppModule { }
