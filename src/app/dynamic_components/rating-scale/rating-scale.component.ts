import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-rating-scale',
  templateUrl: './rating-scale.component.html',
  styleUrls: ['./rating-scale.component.scss']
})
export class RatingScaleComponent implements OnInit {

  constructor(public config:ConfigService) { }

  ngOnInit(): void {}

  // thumbLabel = false;
  // value = 0;
  disabled = true;
  submitted = false;
  type="";
 
  model = {
    comp:'RatingScaleComponent',
    qns:'',
    ans:''
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
  }
}

