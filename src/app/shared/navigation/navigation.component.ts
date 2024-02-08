import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  

navigatToRoute() {
  this.router.navigate(['./Page'])
}

constructor(private router:Router){
    router = router
}
}
