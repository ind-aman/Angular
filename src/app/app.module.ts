import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialPageModule } from './tutorial-page/tutorial-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TutorialPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
