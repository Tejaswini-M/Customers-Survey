import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  template:any=[];
  default:boolean=false
  duplicateIndex:any;
  dupTitle:any;
  copySurvey:boolean=false;
  closedSurvey:boolean=false;
  constructor(public config:ConfigService,private rout: Router) { }
  title:any;
  ngOnInit(): void {
    this.config.getTemplateData().subscribe(data => {
      //console.log("template",data);
      this.template=data;
      this.config.allComps[0]=data;
    })
  }

  viewDetail(index : any){
    
    console.log(this.template)
    this.rout.navigate(['/user', index]);
    this.config.paramID=index;
    this.config.userValues=this.config.allComps[index].list;
    //this.config.userValues=this.config.allComps[index].list;
    // if(this.default){
    //   this.rout.navigate(['/user']);
    //   //this.config.paramID=index;
    //   this.config.userValues=this.template[0].list;
    // }
    // else {
    //   this.rout.navigate(['/user', index]);
    //   this.config.paramID=index;
    //   this.config.userValues=this.config.allComps[index].list;
    // }
  }
  viewAdmin(index : any){
    //this.config.userResponse=false;
    //this.config.adminResponse=true;
    this.rout.navigate(['/qns', index]);
    this.config.paramID=index;
    console.log(this.config.components);
    this.config.compns=this.config.components[index-1];
    console.log(this.config.compns)
  }
  duplicateSurvey(i:any) {
    //this.rout.navigate(['/qns', ]);
    this.config.survey.title=this.config.allComps[i].title + ' - clone';
    //this.config.allComps[this.config.allComps.length].title= this.config.allComps[i].title;
    console.log(this.config.survey.title);
    // this.config.allComps[this.config.allComps.length-1].title= this.config.survey.title;
    this.dupTitle=i;
    this.copySurvey=true;
  }
  updateTitle() {
    //if(this.duplicateIndex!=""){
      // this.config.allComps.push(this.config.allComps[this.dupTitle]);
      // console.log(this.config.survey.title,this.config.allComps.length,this.dupTitle,this.duplicateIndex)
      // this.config.allComps[this.config.allComps.length-1].title= this.config.survey.title;
      // console.log(this.config.allComps[this.config.allComps.length-1].title)
      // this.config.allComps[this.dupTitle].title= this.duplicateIndex;
      let duplicate ={
        id:this.config.allComps.length,
        title:this.config.survey.title,
        list:this.config.allComps[this.dupTitle].list
      }
      this.config.allComps.push(duplicate);
      console.log(this.config.allComps);
      //this.copySurvey=false;
    //}
  }
  closeSurvey(i:any) {
    this.closedSurvey=true;
    this.config.allComps.splice(i,1);
    

    // setTimeout(()=>{
    //   this.closedSurvey=false;
    // },3000);
    
  }
  onSearch() {
    
  }


}
