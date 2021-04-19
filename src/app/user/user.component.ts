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
  onSubmit(){
    console.log(this.config.survey);
  }

}
