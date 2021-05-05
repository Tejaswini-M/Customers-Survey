import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
 
  userResponse: boolean = false;
  adminResponse: boolean = false;
  createResponse=false;
  components:any=[];
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
  allComps:any[]=[];
  paramID=0;
  userValues=this.survey.list;
  isDisable=false;
  compns:any=[];
  constructor(public http:HttpClient) { }

  userUrl = "/assets/data/user.json";
  templateUrl = "/assets/data/template.json";

  getUserData():Observable<any> {
    return this.http.get<any[]>(this.userUrl);
  }

  getTemplateData():Observable<any> {
    return this.http.get<any[]>(this.templateUrl);
  }
}
