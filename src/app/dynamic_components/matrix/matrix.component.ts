import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent implements OnInit {

  tabs=[
    { id:1, value:'',status:null},
    { id:2, value:'',status:null},
    { id:3, value:'',status:null}
  ];
  
  model = {
    comp:'MatrixComponent',
    qns:'',
    ans:'',
    tabs:[
      { id:1, value:'',status:null},
      { id:2, value:'',status:null},
      { id:3, value:'',status:null}
    ]
  }
  submitted = false;
  tabsLength: any;

  constructor(public config:ConfigService) { }

  ngOnInit(): void {}

    addTable() {
      const obj =  { id:this.model.tabs.length+1, value:'',status:null};
      this.model.tabs.push(obj);
    }
    
    deleteRow(i:any) {
      this.model.tabs.splice(i,1);
    }
 
    onSubmit() {
      this.tabsLength = this.model.tabs.length;
      console.log(this.tabsLength);
      console.log("value");

      this.submitted =true;
      console.log(this.model);
      
      this.config.matrixValues=this.model;
      console.log(this.config.matrixValues);
      if(Object.keys(this.config.matrixValues).length>0){
        this.config.allValues.push(this.config.matrixValues);
      }
    }

  drop(event: CdkDragDrop<any[]>){
    //this.viewContainerRef.move(this.components[event.previousIndex].hostView, event.currentIndex);
    moveItemInArray(this.model.tabs, event.previousIndex, event.currentIndex);
    //console.log(event.container.data);
  }

  status = ['Strongly agree', 'agree', 'Somewhat agree', 'Neither agree nor disagree', 'Somewhat disagree', 'Disagree', 'Strongly disagree'];
}
