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
  
  tabs=[
    { id:'', value:''},
    { id:'', value:''},
    { id:'', value:''}
  ];

  model = {
    qns:'Please enter question',
    tab:'',
    ans:'',
    comp:'MixedTypeComponent'    
    // tabs:[
    //   { id:1, value:'',selected:false},
    //   { id:2, value:'',selected:false},
    //   { id:3, value:'',selected:false}
    // ]
  }

  submitted = false; 
  tabsLength: any;
  selectedTab:any=[];
  public editing = false;
  touchtime = 0;
  public singleClick() {
    if(!this.config.userResponse) {
      if (this.touchtime === 0) {
        this.touchtime = new Date().getTime();
      } else {
        if (new Date().getTime() - this.touchtime < 400) {
          this.editing = true;
          this.touchtime = 0;
        } else {
          this.touchtime = new Date().getTime();
        }
      }
    }
  }
  // addTable() {
  //   const obj =  { id:this.model.tabs.length+1, value:'',selected:false};
  //   this.model.tabs.push(obj);
  // }
  // deleteRow(i:any) {
  //   this.model.tabs.splice(i,1);
  // }
 
  onSubmit() {
    // this.tabsLength=this.model.tabs.length;
    console.log(this.tabsLength);
    console.log("value");
    this.submitted =true;
    console.log(this.model);
    this.config.mixedValues=this.model;
    console.log(this.config.mixedValues);
    // if(Object.keys(this.config.mixedValues).length>0){
      this.config.allValues.push(this.config.mixedValues);
    // }
    this.config.allValues = [...new Set(this.config.allValues)];

  }
  edit() {
    this.config.userResponse ? this.submitted=true : this.submitted=false;
  }
  // drop(event: CdkDragDrop<any[]>){
  //   moveItemInArray(this.model.tab, event.previousIndex, event.currentIndex);
  // }

  selectOption(num:any){
    if(this.config.userResponse){
      // tab.selected =!tab.selected;
      this.model.tab=num;    
    }
    //this.selectedTab = this.model.tabs.filter(v=> v.selected== true);
    //console.log(this.selectedTab);
  }

  options = ['Very satisfied','Satisfied', 'Neutral', 'Dissatisfied','Very dissatisfied'];

}
