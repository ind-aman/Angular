import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatPromiseComponent } from './cat-promise/cat-promise.component';
import { ModelModule } from '../model/model.module';



@NgModule({
  declarations: [
    CatPromiseComponent
  ],
  imports: [
    CommonModule,
    ModelModule
  ]
})
export class TutorialPageModule { }
