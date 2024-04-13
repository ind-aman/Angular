import { animate, state, style, transition, trigger, AnimationMetadata } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-animation-page',
  templateUrl: './animation-page.component.html',
  styleUrls: ['./animation-page.component.scss'],

  animations: [
    trigger('fadeInOut', [
      state('void', style({ backgroundColor: 'black' })),
      state('*', style({backgroundColor: 'Red'})),
      transition('void <=> *', animate('10s'))
    ]),
    trigger('colorChange', [
      // ...['green', 'red'].map(color => state(`state-${color}`, style({ backgroundColor: color }))),
      state('state-green', style({background:'linear-gradient(to right, black, white)'})),
      state('state-red', style({background:'linear-gradient(to right, white, black'})),
      transition('state-green <=> state-red', animate('2s'))
    ]),
    trigger('position',[
      state('state-left', style({transform: 'translateX(-40px)'})),
      state('state-right', style({transform: 'translateX(40px)'})),
      transition('state-left <=> state-right', animate('2s'))
    ])

  ]
})
export class AnimationPageComponent implements OnInit{
  backgroundAnimationState = 'state-green';
  positionAnimaitonState = 'state-left';
  positionAnimaitonState2 = 'state-left';

  switchBackgroundAnimation() {
    this.backgroundAnimationState = this.backgroundAnimationState === 'state-green' ? 'state-red' : 'state-green';
  }

  switchAnimationPosition(){
    console.log("Trigger")
    this.positionAnimaitonState = this.positionAnimaitonState == 'state-left'? 'state-right': 'state-left';
  }

  ngOnInit(): void {

      setInterval(() => {
        this.positionAnimaitonState2 = this.positionAnimaitonState2 == 'state-left'? 'state-right': 'state-left';
      }, 2000); 
  }
}
