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
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit{
  
  cmpRef: any;
  comps: any;
  qnsType = dynamicComponents;
  components: any[] = [];

  ngOnInit(): void {  }

  @ViewChild('appDynamic', { static: true, read: ViewContainerRef })
  viewContainerRef:any;
  constructor(private compFactoryResolver: ComponentFactoryResolver,public config:ConfigService) { }

  loadComponent(name:any) {
    this.comps = name.name;
    console.log(this.comps);
    const compFactory = this.compFactoryResolver.resolveComponentFactory(name);
    this.components.push(compFactory);
    console.log(this.components);
  }

  drop(event: CdkDragDrop<any[]>){
    moveItemInArray(this.components, event.previousIndex, event.currentIndex);
  }
  
  delete(d:any) {
    this.components.splice(d,1);
  }

}

export const dynamicComponents = [
  {name:MultiSelectComponent,isDisable:false,comp:'Multi Select Component'}, 
  {name:YesNoComponent,isDisable:false,comp:'YesNo Component'}, 
  {name:MatrixComponent,isDisable:false,comp:'Matrix Component'},
  {name:RatingScaleComponent,isDisable:false,comp:'Rating Scale Component'},
  {name:RankingComponent,isDisable:false,comp:'Ranking Component'}, 
  {name:OpenEndedComponent,isDisable:false,comp:'Open Ended Component'}, 
  {name:MixedTypeComponent,isDisable:false,comp:'Mixed Type Component'},
  {name:ImageChoiceComponent,isDisable:false,comp:'Image Choice Component'}
];
