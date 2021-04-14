import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ConfigService{

    mixedValues={}
    rankingValues={}
    ratingValues={}
    matrixValues={}
    allValues : any[] = [
      // {mixedtype:''},
      // {ranking:''},
      // {rating:''},
      // {matrix:''}
    ];

    survey={
        id:1,
        list:this.allValues,
    };

    allComps:any[]=[];

    constructor(public http:HttpClient){ }
    
}