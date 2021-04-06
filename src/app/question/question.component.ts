import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatrixComponent } from '../dynamic_components/matrix/matrix.component';
import { MultiSelectComponent } from '../dynamic_components/multi-select/multi-select.component';
import { YesNoComponent } from '../dynamic_components/yes-no/yes-no.component';
import { ImageChoiceComponent } from '../dynamic_components/image-choice/image-choice.component';
import { MixedTypeComponent } from '../dynamic_components/mixed-type/mixed-type.component';
import { OpenEndedComponent } from '../dynamic_components/open-ended/open-ended.component';
import { RankingComponent } from '../dynamic_components/ranking/ranking.component';
import { RatingScaleComponent } from '../dynamic_components/rating-scale/rating-scale.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit{
  

  comp: any;
  questionType = dynamicComponents;
  components: any[] = [];

  ngOnInit(): void {
  }

  constructor(private compFactoryResolver: ComponentFactoryResolver) { }

  loadComponent(name:any) {
    this.comp = name;
    const compFactory = this.compFactoryResolver.resolveComponentFactory(name);
    this.components.push(compFactory);
  }

  drop(event: CdkDragDrop<any[]>){
    moveItemInArray(this.components, event.previousIndex, event.currentIndex);
  }
  
  delete(d:any) {
    this.components.splice(d,1);
  }

}
export const dynamicComponents = [MultiSelectComponent, YesNoComponent, MatrixComponent,
RatingScaleComponent, RankingComponent, OpenEndedComponent, MixedTypeComponent, ImageChoiceComponent];
