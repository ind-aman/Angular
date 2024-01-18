import { Injectable } from '@angular/core';
import { CatDetail } from '../model/cat-detail';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  getCatDetail():Promise<CatDetail>{
    let request1 = fetch('https://catfact.ninja/fact').then((res)=> { return res});

    let request2 = fetch('https://api.thecatapi.com/v1/images/search').then((res)=>{ return res});

    return Promise.all([request1,request2]).then((result)=>{
      let CatDetail:CatDetail = {};
      result[0].json().then((data)=>{ CatDetail.catFact = data.fact})
      result[1].json().then((data)=> {CatDetail.catImage = data[0].url})
      return CatDetail
    }).then((catDetail)=>{return catDetail})
     
  }


  constructor() { }
}
