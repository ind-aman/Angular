import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavbarManagerService } from 'src/app/services/navbar-manager.service';

@Component({
  selector: 'app-first-app-page',
  templateUrl: './first-app-page.component.html',
  styleUrls: ['./first-app-page.component.scss'],
  animations: [ trigger('moveIn',[
    state('void', style({ gridTemplateColumns:'0fr auto'})),
    transition('void <=> *',animate('70ms'))
  ]) ]
})
export class FirstAppPageComponent implements OnInit {

  sideBarState = 'void'

  ngOnInit(): void {
    this.completeArray();
    this._navbarManger.sideBarState.subscribe(res=> {console.log(res);this.sideBarState= res});
  }

  linkArray = [
    { link: 'cat', linkname:"CatFact"},
    {link:'animation', linkname:'Animation Chapter'}
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

  public constructor(private _navbarManger:NavbarManagerService){}
 
  
}
