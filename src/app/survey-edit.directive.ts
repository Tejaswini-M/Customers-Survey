import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, TemplateRef, ViewContainerRef } from '@angular/core';
import { ConfigService } from './services/config.service';

@Directive({
  selector: '[appSurveyEdit]'
})
export class SurveyEditDirective {

  constructor(private config:ConfigService) {}
 
  @Output() editSurvey = new EventEmitter<any>();
  @Output() dbclick = new EventEmitter();
  
  @HostListener('click') onClick () {
    // this.editSurvey.emit(true);
    this.singleClick();
  }
  touchtime = 0;
  public singleClick() {
    if(!this.config.userResponse) {
      if (this.touchtime === 0) {
        this.touchtime = new Date().getTime();
      } else {
        if (new Date().getTime() - this.touchtime < 400) {
          this.editSurvey.emit(true);
          this.touchtime = 0;
        } else {
          this.touchtime = new Date().getTime();
        }
      }
    }
  }

}
