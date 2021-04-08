import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-ended',
  templateUrl: './open-ended.component.html',
  styleUrls: ['./open-ended.component.scss']
})
export class OpenEndedComponent implements OnInit {
  submitted = false;
  model:any;
  type="";
  tab:any;
  constructor() { }

  ngOnInit(): void {
    //return sentiment=='like' ? this.tab=sentiment :  this.tab=sentiment;
  }

  onSubmit() {
    console.log("value");
    console.log(this.type);
    this.submitted =true;
  }

}
