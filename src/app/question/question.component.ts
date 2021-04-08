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

  cmpRef: any;
  comps: any;
  qnsType = dynamicComponents;
  components: any[] = [];

  ngOnInit(): void {
  }

  @ViewChild('appDynamic', { static: true, read: ViewContainerRef })
  viewContainerRef:any;
  //component: ComponentRef<any>[]=[];
  constructor(private compFactoryResolver: ComponentFactoryResolver) { }

  loadComponent(name:any) {
    // const viewContainerRef = this.entryContainer.viewContainerRef;
    //const cmpClass = this.qnsType.find(cmp => cmp.name === name);
    //  console.log(name);
    // const cmpToCreate = new DynamicComponent(cmpClass);
    // const cmpFactory = this.compFactoryResolver. resolveComponentFactory(cmpToCreate.component);
    this.comps=name.name;
    console.log(this.comps);
    // const cmpRef = viewContainerRef.createComponent(cmpFactory);
    // for(let i=1; i<=this.qnsType.length; i++){
    //   if(name == this.qnsType[i].name){
    //     let cmpFactory= this.compFactoryResolver.resolveComponentFactory(this.qnsType[i]);
    //     //this.comps.push(cmpFactory);
    //     let componentRef = this.viewContainerRef.createComponent(cmpFactory);
    //     //const cmpRef= this.viewContainerRef.createComponent(this.comps);
    //     let currentComponent = componentRef.instance;
    //     this.components.push(componentRef);
    //   }
    // }
    const cmpFactory= this.compFactoryResolver.resolveComponentFactory(name);
    //const cmpRef= this.viewContainerRef.createComponent(cmpFactory);
    this.components.push(cmpFactory);
    //this.components.push( this.viewContainerRef.createComponent(cmpFactory));
    
    //let currentComponent = componentRef.instance;
    //this.components.push(componentRef);
    console.log(this.components);
  }

  drop(event: CdkDragDrop<any[]>){
    //this.viewContainerRef.move(this.components[event.previousIndex].hostView, event.currentIndex);
    moveItemInArray(this.components, event.previousIndex, event.currentIndex);
    //console.log(event.container.data);
  }
  deleteComponent(i:any) {
    this.components.splice(i,1);
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
