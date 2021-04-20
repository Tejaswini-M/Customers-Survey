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

  cmp = {
    ans:'',
    qns:'',
    tab:[
      { id:'', value:''},
      { id:'', value:''},
      { id:'', value:''}
    ]
  }
  thumbLabel = false;
  value = 0;

  onSubmit(){
    console.log(this.config.userValues);
  }

  drop(event: CdkDragDrop<any[]>){
    moveItemInArray(this.cmp.tab, event.previousIndex, event.currentIndex);
  }

  status = ['Very Good', 'Good', 'Fair', 'Poor', 'Very Poor'];

}
