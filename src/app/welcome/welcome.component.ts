import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  firstName: any;

  constructor(public config:ConfigService) { }

  ngOnInit(): void {
    this.config.getUserData().subscribe(data => {
      console.log(data);
      this.firstName=data.firstName;
    })
  }

}
