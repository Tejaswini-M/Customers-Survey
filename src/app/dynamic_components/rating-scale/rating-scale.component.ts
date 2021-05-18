import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-rating-scale',
  templateUrl: './rating-scale.component.html',
  styleUrls: ['./rating-scale.component.scss']
})
export class RatingScaleComponent implements OnInit {

  constructor(public config:ConfigService) { 
    this.rating = 0;
    this.selectedValue = 0;
  }

  ngOnInit(): void {}
 
  selectedTab:any=[];
  rating: number;
  // thumbLabel = false;
  // value = 0;
  disabled = true;
  submitted = false;
  type="";
  //ans=0;
  @Input() data: any;
  @Output() changedData = new EventEmitter<any>();

  model = {
    comp:'RatingScaleComponent',
    qns:'',
    ans:'',
    ansType:'',
    }
    edit() {
      this.config.userResponse ? this.submitted=true : this.submitted=false;
    }
  onSubmit() {
    this.config.ratingValues=[];
    console.log("value");
    console.log(this.type);
    this.submitted =true;
    console.log(this.model);
    this.config.ratingValues=this.model;
    console.log(this.config.ratingValues);
    //if(Object.keys(this.config.ratingValues).length>0){
      this.config.allValues.push(this.config.ratingValues);
    //}
    this.config.allValues = [...new Set(this.config.allValues)];
    this.data = this.model;
    this.changedData.emit(this.data);
    console.log(this.data)
  }
  stars = ['1', '2', '3', '4', '5'];
    selectedValue: number;   
    
    countStar(star: any) {
      if(this.config.userResponse){
        // tab.selected = !tab.selected;
        this.model.ans = star;
        // console.log(tab);
      }
    }
  
  selectOption(num:any){
    if(this.config.userResponse){
      // tab.selected = !tab.selected;
      this.model.ans = num;
      // console.log(tab);
    }
  }

  numbers = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9','10'];
}

