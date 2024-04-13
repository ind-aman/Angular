import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarManagerService {

  sideBarState = new Subject<string>();
  private _sideBarValue = '*';

  public async sideBarEvent(){
    
    if(this._router.url.split('/')[1] != 'firstApp'){

      await this._router.navigateByUrl('firstApp');
      this.sideBarState.next(this._sideBarValue);
    }
    else{
      this._sideBarValue = this._sideBarValue == '*'? 'void':'*';
      this.sideBarState.next(this._sideBarValue);
    }
    

  }
  constructor(private _router:Router) {  }
}
