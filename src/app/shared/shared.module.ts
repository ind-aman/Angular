import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  declarations: [
    ErrorPageComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavigationComponent
  ]
})
export class SharedModule { }
