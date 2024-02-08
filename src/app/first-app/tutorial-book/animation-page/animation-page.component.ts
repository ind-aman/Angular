import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-animation-page',
  templateUrl: './animation-page.component.html',
  styleUrls: ['./animation-page.component.scss'],

  //This is how we define a animation 
  animations: [
   trigger('InOut', [
    state('void', style({backgroundColor:'black' })),
    state('*', style({backgrounColor:'red'})),
    transition('void <=> *',animate('1s'))
   ])
  ]
})
export class AnimationPageComponent {

}
