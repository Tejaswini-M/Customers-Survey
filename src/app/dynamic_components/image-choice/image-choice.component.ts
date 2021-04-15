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
      { id:'', value:'',selected:false},
      { id:'', value:'',selected:false},
      { id:'', value:'',selected:false}
    ]
  }
  submitted = false;
  selectedTab:any=[];

  constructor(public config:ConfigService) { }

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
    //this.config.imageValues=[];
    console.log("value");
    this.submitted =true;
    // console.log(this.model);
    // this.config.imageValues=this.model;
    // console.log(this.config.imageValues);
    // if(Object.keys(this.config.imageValues).length>0){
    //   this.config.allValues.push(this.config.imageValues);
    // }
  }

  drop(event: CdkDragDrop<any[]>){
    //this.viewContainerRef.move(this.components[event.previousIndex].hostView, event.currentIndex);
    moveItemInArray(this.model.tabs, event.previousIndex, event.currentIndex);
    //console.log(event.container.data);
  }

  selectOption(){
    this.selectedTab = this.model.tabs.filter(v=> v.selected== true);
    console.log(this.selectedTab);
  }
  
  urls: any[] = [];
  onFileChanged(event:any,index:number) {
    if(event.target.files && event.target.files[0]){
      var mount = event.target.files.length;
      for(let i=0; i<mount; i++) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (event:any) => {
          
        //this.urls.push(event.target.result);
        //for(let i=0; i<10; i++) {
        //let p=this.model.tabs.findIndex(obj=>obj.value=='' || obj.value!='')
        console.log(index,i)
        //if(index==i){
          this.model.tabs[index].value=event.target.result;
       // }
          // this.model.tabs.push({id:'',value:event.target.result, selected:false});
          // console.log(this.model.tabs);
        //}
        

        //this.model.tabs=this.urls;
        }
      }
    }
  }

}
