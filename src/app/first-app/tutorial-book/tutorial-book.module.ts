import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationPageComponent } from './animation-page/animation-page.component';
import { TutorialBookRoutingModule } from './tutorial-book-routing.module';
import { CatPromiseComponent } from './cat-promise/cat-promise.component';

@NgModule({
  declarations: [
    CatPromiseComponent,
    AnimationPageComponent
  ],
  imports: [
    CommonModule,
    TutorialBookRoutingModule
  ],
 
})
export class TutorialBookModule { }
