import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from 'src/app/services/config.service';

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
  tabsLength: any;
  model = {
    comp:'MultiSelectComponent',
    qns:'',
    tabs:[
      { id:'', value:'',selected:false},
      { id:'', value:'',selected:false},
      { id:'', value:'',selected:false}
    ]
  }
  submitted = false;
  selectedTab:any=[];
  parent!: FormGroup;
  ans!: FormArray;
  // public basicInfoForm: FormGroup = new FormGroup(
  //   {
  //     qns: new FormControl("",[Validators.required]),
  //     //ans: new FormControl("", [Validators.required])
  //   });
  constructor(public config:ConfigService,private fb: FormBuilder,) { }

  ngOnInit(): void {
  //   this.parent = 
  //   this.controlContainer.control as FormGroup;
  //   this.parent.addControl('contentInfoForm',
  //   this.fb.group({
  //    qns: new FormControl("",[Validators.required]),
  //    //ph: this.fb.group({
  //    ans: this.fb.array([this.addTable()])
  //   //})
  //    //ans: this.fb.array([]),
  //    //ans: new FormControl("", [Validators.required])
  //  }));
  // //  for(let i=0; i<3; ++i) {
  // //    this.addTable();
  // //  }
  // }
  // addTable() {
  //   return this.fb.group({
  //     //phaseType: [''],
  //     value: ""
  //   });
  }

  // addMorePhase() {
  //   this.phaseArray.push(this.addTable());
  // }
  // get phaseArray() {
  //   const control = <FormArray>(<FormGroup>this.parent.get('contentInfoForm')).get('ans');
  //   return control;
  // }
  addTable() {
    const obj =  { id:'', value:'',selected:false};
    this.model.tabs.push(obj);
  }
  deleteRow(i:any) {
    this.model.tabs.splice(i,1);
  }
  // deleteRow(i:any) {
  //   //this.phaseArray.removeAt(i);
  //   this.model.tabs.splice(i,1);
  // }
 
  onSubmit() {
    this.tabsLength=this.model.tabs.length;
    console.log(this.tabsLength);
    //this.config.qnValues={};
    console.log("value");
    this.submitted =true;
    //console.log(this.parent.value)
    console.log(this.model);
    this.config.qnValues=this.model;
    console.log(this.config.qnValues);
    if(Object.keys(this.config.qnValues).length>0){
      this.config.allValues.push(this.config.qnValues);
    }
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

}
