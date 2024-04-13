import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarManagerService } from 'src/app/services/navbar-manager.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  

sideBarEvent() {
  this._navbarManger.sideBarEvent();
}

constructor(private router:Router, private _navbarManger:NavbarManagerService){
    router = router
}
}
