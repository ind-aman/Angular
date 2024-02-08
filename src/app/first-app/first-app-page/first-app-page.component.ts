import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-app-page',
  templateUrl: './first-app-page.component.html',
  styleUrls: ['./first-app-page.component.scss'],
  animations: [ trigger('moveIn',[
    state('void', style({ gridTemplateColumns:'0% 100%'})),
    state('*', style({gridTemplateColumns: '15%, 85%'})),
    transition('void <=> *',animate('70ms'))
  ]) ]
})
export class FirstAppPageComponent implements OnInit{
ngOnInit(): void {
  this.completeArray()
}
linkArray = [
  { link: 'Cat', linkname:"CatFact"},
  {link:'Animations', linkname:'Animation Chapter'}
];

completeArray(){
    for(let i=0; i< 50; i++){
      let obj = {
        link: `Link ${i}`,
        linkname:`linkName ${i}`
      }
      this.linkArray.push(obj)
    }
}


  
}
