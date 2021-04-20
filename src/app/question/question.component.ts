import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatrixComponent } from '../dynamic_components/matrix/matrix.component';
import { MultiSelectComponent } from '../dynamic_components/multi-select/multi-select.component';
import { YesNoComponent } from '../dynamic_components/yes-no/yes-no.component';
import { ImageChoiceComponent } from '../dynamic_components/image-choice/image-choice.component';
import { MixedTypeComponent } from '../dynamic_components/mixed-type/mixed-type.component';
import { OpenEndedComponent } from '../dynamic_components/open-ended/open-ended.component';
import { RankingComponent } from '../dynamic_components/ranking/ranking.component';
import { RatingScaleComponent } from '../dynamic_components/rating-scale/rating-scale.component';
import { CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../services/config.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  masterForm!: FormGroup;
  viewOption:any;
  title:any;
  createResponse=false;
  ngOnInit(): void {
    this.viewOption=this.route.snapshot.data.viewOption;
    // this.masterForm = this.fb.group({
    //   // formTitle: new FormControl(''),

    //   // basicInfo: new FormControl(''),
    //   // addressInfo: new FormControl(''),

    //   // specialInfo: new FormControl('')
    // });
  }
  viewDetail(index : any){
    this.rout.navigate(['/user', index]);
    this.config.paramID=index;
    this.config.userValues=this.config.allComps[index].list;
  }
  count=0;
  onSave() {
    console.log(this.config.allComps)
    //console.log(this.masterForm.value);
    console.log(this.components.length,this.config.allValues.length);
    //this.config.allValues=[];
    // console.log(Object.values(this.config.qnValues)[0]);
    // if(Object.values(this.config.qnValues)[0]==this.comps){
    //   this.config.allValues.push(this.config.qnValues);
    // }
    // const obj =  { id:this.count, list:this.config.allValues};
    // this.config.survey.push(obj);
    this.config.allValues = [...new Set(this.config.allValues)];
    console.log(this.config.allValues);
    console.log(JSON.stringify(this.config.allValues));
    this.config.survey.id=this.config.survey.id+1;
    this.config.survey.list=this.config.allValues;
    this.config.userValues=this.config.survey.list
    console.log(this.config.survey);
    this.config.allComps.push(JSON.parse(JSON.stringify(this.config.survey)));
    
    console.log("all", this.config.allComps);
    this.config.paramID=this.config.allComps.length-1;
    // console.log(JSON.stringify(this.config.allComps));
    this.config.allValues=[];
    
  
  }
  @ViewChild('appDynamic', { static: true, read: ViewContainerRef })
  viewContainerRef:any;
  //component: ComponentRef<any>[]=[];
  constructor(public fb: FormBuilder,private rout: Router, private route: ActivatedRoute,public config:ConfigService,private compFactoryResolver: ComponentFactoryResolver) { }
  
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
    // this.config.allComps.push(this.comps);
    // console.log(this.config.allComps);
    
  }
  onDrop(event: any, idx: any){
    
  }
  drop(event: CdkDragDrop<any[]>){
    //this.viewContainerRef.move(this.components[event.previousIndex].hostView, event.currentIndex);
      moveItemInArray(this.components, event.previousIndex, event.currentIndex);
    //console.log(event.container.data);
  }
  deleteComponent(i:any) {
    this.components.splice(i,1);
    this.config.allValues.splice(i,1);
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
