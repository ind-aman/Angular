import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstAppPageComponent } from './first-app-page/first-app-page.component';
import { FirstAppRouteModule } from './first-app-route.module';
import { RouterModule } from '@angular/router';
import { SecondAppPageComponent } from './second-app-page/second-app-page.component';



@NgModule({
  declarations: [
    FirstAppPageComponent,
    SecondAppPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FirstAppRouteModule
  ]
 
})
export class FirstAppModule { }
