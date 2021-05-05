import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
    qns:'',
    tab:'',
  }
  @Input() data: any;
  @Output() changedData = new EventEmitter<any>();
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
    //if(Object.keys(this.config.yesValues).length>0){
      this.config.allValues.push(this.config.yesValues);
    //}
    //console.log(this.config.allValues);
    this.config.allValues = [...new Set(this.config.allValues)];
    this.data = this.model;
    this.changedData.emit(this.data);
    console.log(this.data)
  }
  edit() {
    this.config.userResponse ? this.submitted=true : this.submitted=false;
  }
  captureSentiment(sentiment:any) {
    if(this.config.userResponse){
      console.log(sentiment);
      this.model.tab=sentiment;
      //return sentiment=='like' ? this.model.tab=sentiment :  this.model.tab=sentiment;
    }
  }
}
