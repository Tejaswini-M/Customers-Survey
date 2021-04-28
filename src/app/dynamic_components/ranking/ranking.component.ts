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
    comp:'RankingComponent',
    qns:'',
    tabs:[
      { id:'', value:''},
      { id:'', value:''},
      { id:'', value:''}
    ]
  }
  submitted = false; 
  type="";

  addTable() {
    const obj =  { id:'', value:''};
    this.model.tabs.push(obj);
  }
  
  deleteRow(i:any) {
    this.model.tabs.splice(i,1);
  }
  edit() {
    this.config.userResponse ? this.submitted=true : this.submitted=false;
  }
  onSubmit() {
    this.config.rankingValues=[];
    console.log("value");
    console.log(this.type);
    this.submitted =true;
    console.log(this.model);
    this.config.rankingValues=this.model;
    console.log(this.config.rankingValues);
    //if(Object.keys(this.config.rankingValues).length>0){
      this.config.allValues.push(this.config.rankingValues);
    //}
    this.config.allValues = [...new Set(this.config.allValues)];

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
