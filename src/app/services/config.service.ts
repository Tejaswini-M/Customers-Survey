import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(public http:HttpClient) { }

  userUrl = "/assets/data/user.json";

  getUserData():Observable<any> {
    return this.http.get<any[]>(this.userUrl);
  }
}
