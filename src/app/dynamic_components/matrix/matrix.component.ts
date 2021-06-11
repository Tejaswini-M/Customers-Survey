import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent implements OnInit {

  model = {
    comp:'MatrixComponent',
    qns:'Please enter question',
    ans:'',
    tabs:[
      { id:1, value:'Option1',status:null},
      { id:2, value:'Option2',status:null},
      { id:3, value:'Option3',status:null}
    ]
  }
  submitted = false;
  tabsLength: any;

  constructor(public config:ConfigService) { }
  public editing = false;
  
  ngOnInit(): void {}

    addTable() {
      const obj =  { id:this.model.tabs.length+1, value:'Option',status:null};
      this.model.tabs.push(obj);
    }
    
    deleteRow(i:any) {
      this.model.tabs.splice(i,1);
    }
    edit() {
      this.config.userResponse ? this.submitted=true : this.submitted=false;
    }
    onSubmit() {
      this.tabsLength = this.model.tabs.length;
      console.log(this.tabsLength);
      console.log("value");

      this.submitted =true;
      console.log(this.model);
      
      this.config.matrixValues=this.model;
      console.log(this.config.matrixValues);
      //if(Object.keys(this.config.matrixValues).length>0){
        this.config.allValues.push(this.config.matrixValues);
  // }
  this.config.allValues = [...new Set(this.config.allValues)];

    }

  drop(event: CdkDragDrop<any[]>){
    //this.viewContainerRef.move(this.components[event.previousIndex].hostView, event.currentIndex);
    moveItemInArray(this.model.tabs, event.previousIndex, event.currentIndex);
    //console.log(event.container.data);
  }

  status = ['Very Good', 'Good', 'Fair', 'Poor', 'Very Poor'];
}
