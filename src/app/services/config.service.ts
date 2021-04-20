import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
 
  userResponse: boolean = false;
  adminResponse: boolean = false;
  qnValues={}
  openValues={}
  yesValues={}
  imageValues={}
  mixedValues={}
  rankingValues={}
  ratingValues={}
  matrixValues={}
  allValues : any[] = [];
  survey={
    id:1,
    title:'',
    list:this.allValues
  }
  //survey:any[]=[];
  allComps:any[]=[
    
  ];
  paramID:any;
  userValues=this.survey.list;
  constructor(public http:HttpClient) { }

  userUrl = "/assets/data/user.json";

  getUserData():Observable<any> {
    return this.http.get<any[]>(this.userUrl);
  }
}
