import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yes-no',
  templateUrl: './yes-no.component.html',
  styleUrls: ['./yes-no.component.scss']
})
export class YesNoComponent implements OnInit {

  constructor() { }

  submitted = false;
  model:any;
  tab:any;

  ngOnInit(): void {
  }
  onSubmit() {
    console.log("value");
    this.submitted =true;
  }
  captureSentiment(sentiment:any) {
    console.log(sentiment);
    return sentiment=='like' ? this.tab=sentiment :  this.tab=sentiment;
  }
}
