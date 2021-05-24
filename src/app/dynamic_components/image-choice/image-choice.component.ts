import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-image-choice',
  templateUrl: './image-choice.component.html',
  styleUrls: ['./image-choice.component.scss']
})
export class ImageChoiceComponent implements OnInit {

  model = {
    comp:'ImageChoiceComponent',
    qns:'',
    tabs:[
      { id:'', value:'',name:'',selected:false},
      { id:'', value:'',name:'',selected:false},
      { id:'', value:'',name:'',selected:false}
    ]
  }
  submitted = false;
  selectedTab:any=[];

  constructor(public config:ConfigService) { }

  ngOnInit(): void {
  }

  addTable() {
    const obj =  { id:'', value:'',name:'',selected:false};
    this.model.tabs.push(obj);
  }
  deleteRow(i:any) {
    this.model.tabs.splice(i,1);
  }
 
  onSubmit() {
    //this.config.imageValues=[];
    console.log("value");
    this.submitted =true;
    console.log(this.model);
    this.config.imageValues=this.model;
    console.log(this.config.imageValues);
    //if(Object.keys(this.config.imageValues).length>0){
      this.config.allValues.push(this.config.imageValues);
    //}
    this.config.allValues = [...new Set(this.config.allValues)];
  }

  drop(event: CdkDragDrop<any[]>){
    moveItemInArray(this.model.tabs, event.previousIndex, event.currentIndex);
  }

  selectOption(url:any){
    if(this.config.userResponse){
      url.selected =!url.selected
      // this.selectedTab = this.model.tabs.filter(v=> v.selected== true);
      // console.log(this.selectedTab);
    }
  }
  edit() {
    this.config.userResponse ? this.submitted=true : this.submitted=false;
  }
  urls: any[] = [];
  onFileChanged(event:any,index:number) {
    if(event.target.files && event.target.files[0]){
      var mount = event.target.files.length;
      console.log(event.target.files); 
      for(let i=0; i<mount; i++) {
        let reader = new FileReader();
        console.log(event.target.files[i].name); 
        this.model.tabs[index].name=event.target.files[i].name;
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (event:any) => {
        this.model.tabs[index].value=event.target.result;
        }
      }
    }
  }

}
