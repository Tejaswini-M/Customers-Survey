import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-open-ended',
  templateUrl: './open-ended.component.html',
  styleUrls: ['./open-ended.component.scss']
})
export class OpenEndedComponent implements OnInit {
  submitted = false;
  //model:any;
  model = {
    comp:'openended',
    qns:'',
    ans:''
  }
  type="";
  tab:any;
  //parent!: FormGroup;
  constructor(public config:ConfigService) { }

  ngOnInit(): void {
    //return sentiment=='like' ? this.tab=sentiment :  this.tab=sentiment;
  //   this.parent = this.controlContainer.control as FormGroup;
  //   this.parent.addControl('content',
  //   new FormGroup({
  //    qns: new FormControl("",[Validators.required]),
  //    ans: new FormControl("",[Validators.required]),
  //  }));
  }

  onSubmit() {
    this.config.openValues=[];
    console.log("value");
    console.log(this.type);
    this.submitted =true;
    console.log(this.model);
    this.config.openValues=this.model;
    console.log(this.config.openValues);
    if(Object.keys(this.config.openValues).length>0){
      this.config.allValues.push(this.config.openValues);
    }
    //console.log(this.parent.value)
  }

}
