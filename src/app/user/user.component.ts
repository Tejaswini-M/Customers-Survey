import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(public config:ConfigService) { }
  selectedTab: any=[];
  ngOnInit(): void { }
  
  ans = 0;

  onSubmit(){
    console.log(this.config.userValues);
  }

  drop(event: CdkDragDrop<any[]>,i:any){
    moveItemInArray(this.config.userValues.list[i].tabs, event.previousIndex, event.currentIndex);
  }

  stars = ['1', '2', '3', '4', '5'];
  status = ['Very Good', 'Good', 'Fair', 'Poor', 'Very Poor'];  
  numbers = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9','10'];
  options = ['Very satisfied','Satisfied', 'Neutral', 'Dissatisfied','Very dissatisfied'];

}
