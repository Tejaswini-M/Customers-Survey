import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  constructor(public config:ConfigService) { }

  ngOnInit(): void { }
  
  public onChange(event : any):void{
    const newVal = event.target.value;
    console.log(newVal);
  }

  tabs=[
    { id:'', value:''},
    { id:'', value:''},
    { id:'', value:''}
  ];
  
  model = {
    comp:'ranking',
    ques:'',
    tabs:[
      { id:'', value:''},
      { id:'', value:''},
      { id:'', value:''}
    ]
  }
  submitted = false; 

  addTable() {
    const obj =  { id:'', value:''};
    this.model.tabs.push(obj);
  }
  
  deleteRow(i:any) {
    this.model.tabs.splice(i,1);
  }
  
  onSubmit() {
    console.log("value");
    this.submitted =true;
    console.log(this.model);
    this.config.rankingValues=this.model;
    console.log(this.config.rankingValues);
    if(Object.keys(this.config.rankingValues).length>0){
      this.config.allValues.push(this.config.rankingValues);
    }
  }

  // changeOptions(event: any) {
  //   // console.log(event.target.value);
  //   this.model = event.target.value;
  // }

  drop(event: CdkDragDrop<any[]>){
    //this.viewContainerRef.move(this.components[event.previousIndex].hostView, event.currentIndex);
    moveItemInArray(this.model.tabs, event.previousIndex, event.currentIndex);
    //console.log(event.container.data);
  }
}
