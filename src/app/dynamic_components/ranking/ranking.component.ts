import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }
  

  muls=[
    { id:'', value:'',isDisable:false},
    { id:'', value:'',isDisable:false},
    { id:'', value:'',isDisable:false}
  ];
  
  model = {
    ques:'',
    muls:[
      { id:'', value:'',isDisable:false},
      { id:'', value:'',isDisable:false},
      { id:'', value:'',isDisable:false}
    ]
  }
  submitted = false; 

  addTable() {
    const obj =  { id:'', value:'',isDisable:false};
    this.model.muls.push(obj);
  }
  deleteRow(i:any) {
    this.model.muls.splice(i,1);
  }

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
