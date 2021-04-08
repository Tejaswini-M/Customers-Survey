import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-choice',
  templateUrl: './image-choice.component.html',
  styleUrls: ['./image-choice.component.scss']
})
export class ImageChoiceComponent implements OnInit {

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
