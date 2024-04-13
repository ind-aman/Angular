import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [
    ErrorPageComponent,
    NavigationComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavigationComponent
  ]
})
export class SharedModule { }
