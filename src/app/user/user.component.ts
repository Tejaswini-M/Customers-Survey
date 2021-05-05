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
  ngOnInit(): void { 
  
  }

 
  thumbLabel = false;
  ans = 0;

  onSubmit(){
    console.log(this.config.userValues);
  }

  drop(event: CdkDragDrop<any[]>,i:any){
    moveItemInArray(this.config.userValues[i].tabs, event.previousIndex, event.currentIndex);
  }

  status = ['Very Good', 'Good', 'Fair', 'Poor', 'Very Poor'];

}
