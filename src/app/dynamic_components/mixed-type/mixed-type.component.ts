import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-mixed-type',
  templateUrl: './mixed-type.component.html',
  styleUrls: ['./mixed-type.component.scss']
})
export class MixedTypeComponent implements OnInit {
  
  constructor(public config:ConfigService) { }

  ngOnInit( ) { }
  
  model = {
    comp:'mixedtype',
    ques:'',
    ans:'',
    tabs:[
      { id:1, value:'',selected:false},
      { id:2, value:'',selected:false},
      { id:3, value:'',selected:false}
    ]
  }
  submitted = false; 
  selectedTab:any=[];

  addTable() {
    const obj =  { id:this.model.tabs.length+1, value:'',selected:false};
    this.model.tabs.push(obj);
  }
  deleteRow(i:any) {
    this.model.tabs.splice(i,1);
  }
 
  onSubmit() {
    console.log("value");
    this.submitted =true;
    console.log(this.model);
    this.config.mixedValues=this.model;
    console.log(this.config.mixedValues);
    if(Object.keys(this.config.mixedValues).length>0){
      this.config.allValues.push(this.config.mixedValues);
    }
  }

  drop(event: CdkDragDrop<any[]>){
    moveItemInArray(this.model.tabs, event.previousIndex, event.currentIndex);
  }
  selectOption(value:any,i:number){
    this.selectedTab = this.model.tabs.filter(v=> v.selected== true);
    console.log(this.selectedTab);
  }

}
