import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-yes-no',
  templateUrl: './yes-no.component.html',
  styleUrls: ['./yes-no.component.scss']
})
export class YesNoComponent implements OnInit {

  constructor(public config:ConfigService) { }

  submitted = false;
  model={
    comp:'YesNoComponent',
    qns:''
  }
  tab:any;

  ngOnInit(): void {
  }
  onSubmit() {
    console.log("value");
    this.submitted =true;
    //console.log(this.model);
    console.log(this.model);
    this.config.yesValues=this.model;
    console.log(this.config.yesValues);
    if(Object.keys(this.config.yesValues).length>0){
      this.config.allValues.push(this.config.yesValues);
    }
    //console.log(this.config.allValues);
    
  }
  captureSentiment(sentiment:any) {
    console.log(sentiment);
    return sentiment=='like' ? this.tab=sentiment :  this.tab=sentiment;
  }
}
