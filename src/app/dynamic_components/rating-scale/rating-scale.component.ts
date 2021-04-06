import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-scale',
  templateUrl: './rating-scale.component.html',
  styleUrls: ['./rating-scale.component.scss']
})
export class RatingScaleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

  thumbLabel = false;
  value = 0;
  
  model = {
    ques:'',
    muls:[
      { id:'', value:''},
      { id:'', value:''},
      { id:'', value:''}
    ]
  }
  submitted = false;
 
  onSubmit() {
    console.log("value");
    this.submitted =true;
  }

  drop(event: CdkDragDrop<any[]>){
    //this.viewContainerRef.move(this.components[event.previousIndex].hostView, event.currentIndex);
    moveItemInArray(this.model.muls, event.previousIndex, event.currentIndex);
    //console.log(event.container.data);
  }


}
