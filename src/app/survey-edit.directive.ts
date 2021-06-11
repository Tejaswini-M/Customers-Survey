import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ConfigService } from './services/config.service';

@Directive({
  selector: '[appSurveyEdit]'
})
export class SurveyEditDirective {

  constructor(private el:ElementRef,config:ConfigService) {
    //  console.log("value",this.appSurveyEdit);
     console.log("edit-value",this.editValue);
   }

  // @Input() appSurveyEdit = "";
  @Input() editValue = "";
  
 private highlight(color:string) {
    this.el.nativeElement.style.backgroundColor=this.editValue;
    console.log("edit-value",this.editValue);
  }

  @HostListener('click') onClick() {
    // this.el.nativeElement.style.backgroundColor="red";
    this.highlight('blue');
    this.sClick();
  }
  // @HostListener('mouseenter') onMouseEnter() {
  //   // this.el.nativeElement.style.backgroundColor="red";
  //   this.highlight('black');
  // }
  @Input() public editing = false;
  @Output() onCurrent = new EventEmitter();
  touchtime = 0;
  public sClick() {
    // if(!this.config.userResponse) {
      if(this.editing=true) {
        this.el.nativeElement.style.display='none';
      }
      else {
        
      }
      // if (this.touchtime === 0) {
      //   this.touchtime = new Date().getTime();
      // } else {
      //   if (new Date().getTime() - this.touchtime < 400) {
      //     this.editing = true;
      //     this.touchtime = 0;
      //   } else {
      //     this.touchtime = new Date().getTime();
      //   }
      // }
      // if (this.touchtime === 0) {
      //   this.touchtime = new Date().getTime();
      // } else {
      //   if (new Date().getTime() - this.touchtime < 400) {
      //     this.editing = true;
      //     this.touchtime = 0;
      //   } else {
      //     this.touchtime = new Date().getTime();
      //   }
      // }
    // }
  }

}
