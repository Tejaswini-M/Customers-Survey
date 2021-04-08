import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {

  tabs=[
    { id:'', value:''},
    { id:'', value:''},
    { id:'', value:''}
  ];
  
  model = {
    qns:'',
    tabs:[
      { id:'', value:'',selected:false},
      { id:'', value:'',selected:false},
      { id:'', value:'',selected:false}
    ]
  }
  submitted = false;
  selectedTab:any=[];
  constructor() { }

  ngOnInit(): void {
   
  }

  addTable() {
    const obj =  { id:'', value:'',selected:false};
    this.model.tabs.push(obj);
  }
  deleteRow(i:any) {
    this.model.tabs.splice(i,1);
  }
 
  onSubmit() {
    console.log("value");
    this.submitted =true;
  }

  drop(event: CdkDragDrop<any[]>){
    //this.viewContainerRef.move(this.components[event.previousIndex].hostView, event.currentIndex);
    moveItemInArray(this.model.tabs, event.previousIndex, event.currentIndex);
    //console.log(event.container.data);
  }

  selectOption(value:any,i:number){
    this.selectedTab = this.model.tabs.filter(v=> v.selected== true);
    console.log(this.selectedTab);
  }

}
