import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mixed-type',
  templateUrl: './mixed-type.component.html',
  styleUrls: ['./mixed-type.component.scss']
})
export class MixedTypeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
   
  }
  
  model = {
    ques:'',
    muls:[
      { id:'', value:''},
      { id:'', value:''},
      { id:'', value:''}
    ]
  }
  submitted = false; 

  addTable() {
    const obj =  { id:'', value:''};
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
    moveItemInArray(this.model.muls, event.previousIndex, event.currentIndex);
  }

}
