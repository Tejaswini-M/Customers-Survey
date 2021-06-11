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
    qns:'Please enter question',
    tabYes: { value: 'Yes', selected: false },
    tabNo:{value:'No',selected:false}
    // like:'like',
    // dislike:"diskike",
  }
  @Input() data: any;
  @Output() changedData = new EventEmitter<any>();
  color="";
  public editing = false;
  touchtime = 0;
  public singleClick() {
    if(!this.config.userResponse) {
      if (this.touchtime === 0) {
        this.touchtime = new Date().getTime();
      } else {
        if (new Date().getTime() - this.touchtime < 400) {
          this.editing = true;
          this.touchtime = 0;
        } else {
          this.touchtime = new Date().getTime();
        }
      }
    }
  }


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
      // sentiment.selected=true;
      if(sentiment==this.model.tabYes) {
        this.model.tabYes.selected=true;
        this.model.tabNo.selected=false;
      }
      else {
        this.model.tabYes.selected=false;
        this.model.tabNo.selected=true;
      }
      // return sentiment=='yes' ? this.model.tab=sentiment :  this.model.tab=sentiment;
    }
  }
}
