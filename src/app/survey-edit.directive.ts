import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ConfigService } from './services/config.service';

@Directive({
  selector: '[appSurveyEdit]'
})
export class SurveyEditDirective {

  constructor(private el:ElementRef,config:ConfigService) {
    //  console.log("value",this.appSurveyEdit);
    //  console.log("edit-value",this.editValue);
   }

}
