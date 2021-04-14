import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent implements OnInit {

  muls=[
    { id:1, value:'',status:null},
    { id:2, value:'',status:null},
    { id:3, value:'',status:null}
  ];
  
  model = {
    ques:'',
    muls:[
      { id:1, value:'',status:null},
      { id:2, value:'',status:null},
      { id:3, value:'',status:null}
    ]
  }
  submitted = false;
  constructor() { }

  ngOnInit(): void {   
  }

    addTable() {
      const obj =  { id:this.model.muls.length+1 , value:'', status:null};
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

  status = ['Strongly agree', 'agree', 'Somewhat agree', 'Neither agree nor disagree', 'Somewhat disagree', 'Disagree', 'Strongly disagree'];
}