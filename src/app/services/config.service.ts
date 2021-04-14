import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  model={
    comp:'yesorno',
    qns:''
  }
  qnValues={}
  openValues={}
  yesValues={}
  imageValues={}
  allValues : any[] = [
    // {multi:''},
    // {yes:''},
    // {open:''},
    // {image:''}
  ];
  mixedValues={}
  rankingValues={}
  ratingValues={}
  matrixValues={}
  // allValues : any[] = [
  //   // {mixedtype:''},
  //   // {ranking:''},
  //   // {rating:''},
  //   // {matrix:''}
  // ];
  
  survey={
    id:1,
    list:this.allValues,
  };
  allComps:any[]=[];
  constructor(public http:HttpClient) { }

  userUrl = "/assets/data/user.json";

  getUserData():Observable<any> {
    return this.http.get<any[]>(this.userUrl);
  }
}
