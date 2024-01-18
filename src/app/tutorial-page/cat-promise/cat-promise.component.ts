import { Component, OnInit } from '@angular/core';
import { CatDetail } from 'src/app/model/cat-detail';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-cat-promise',
  templateUrl: './cat-promise.component.html',
  styleUrls: ['./cat-promise.component.scss']
})
export class CatPromiseComponent implements OnInit {
  catService: CatService;
  catDetail:CatDetail={};

  constructor(catService: CatService) {
    this.catService = catService;
  }
  ngOnInit(): void {
    this.updateCatDetail();

  }
  updateCatDetail(){
    let result = this.catService.getCatDetail();
    console.log(result)
    result.then((rescatDetail)=>{ 
        this.catDetail.catFact = rescatDetail.catFact; 
        this.catDetail.catImage= rescatDetail.catImage
    });
   
    console.log(this.catDetail);
  }


}
