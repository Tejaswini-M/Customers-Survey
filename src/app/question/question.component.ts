import { Component, HostListener, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef, Input } from '@angular/core';
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
import { PlatformLocation } from '@angular/common';
import { AdItem } from '../item';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit{

  cmpRef: any;
  comps: any;
  totalPages = 10;
  qnsType = dynamicComponents;
  components: any[] = [];
  //components: CompType[] = [];
  masterForm!: FormGroup;
  viewOption:any;
    collection = { count: 20, data: [] };

  // title:any;
  // description:any;
  createResponse=false;
  deleteIndex:any;
 data:any;
 totalRecords: any;
 page: number = 1;
  
  ngOnInit(): void {
    this.config.userResponse=false;
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
    this.config.userResponse=true;
    this.config.allValues = [...new Set(this.config.allValues)];
    var sortedArray = [];
    for(var i=0; i < this.components.length; i++) {
    var found = false;
      for(var j=0; j < this.config.allValues.length && !found; j++) {
        if(this.config.allValues[j].comp == this.components[i].componentType.name) {
            sortedArray.push(this.config.allValues[j]);
            this.config.allValues.splice(j,1);
            found = true;
        }
      }
    }
    console.log("sort",sortedArray)
    console.log(JSON.stringify(sortedArray));
    this.config.survey.id=this.config.allComps.length+1;
    this.config.survey.list=sortedArray;
    this.config.userValues=this.config.survey
    console.log(this.config.survey);
    this.config.allComps.push(JSON.parse(JSON.stringify(this.config.survey)));
    
    console.log("all", this.config.allComps);
    this.config.paramID=this.config.allComps.length-1;
    // console.log(JSON.stringify(this.config.allComps));
    this.config.allValues=[];
    this.config.components.push(this.components);
    console.log( this.config.components);
    this.data = new Array<any>()
    this.data = this.config.components;
    console.log("data at pagination:", this.data);

  //   this.components.forEach(component => {
  //     // how to access the data from each component??
  //     console.log(component.data);
  // });
  }
  // data =  {
  //   comp:'YesNoComponent',
  //   qns:'aks',
  //   tab:'',
  // }
  // onCompDataChanged(item: any,i:any) {
  //   console.log('item:', item);
  //   const field = this.components.filter(a => a.data.comp === item.comp);
  //   field[i].data = item;
  //   //this.data=item;
  // }
  onSubmit(){
    console.log(this.config.userValues);
  }
  @Input() ads: AdItem[] = [];
  @ViewChild('appDynamic', { static: true, read: ViewContainerRef })
  viewContainerRef:any;
  //component: ComponentRef<any>[]=[];
  constructor(public fb: FormBuilder,private rout: Router, private route: ActivatedRoute,
    public config:ConfigService,private compFactoryResolver: ComponentFactoryResolver, private location: PlatformLocation) {
        
  //window.location.hash="Again-No-back-button";//again because google chrome don't insert first hash into history
     //window.onhashchange=function(){confirm("Changes you made may not be saved.")}
  }
  
  
  // @HostListener('window:popstate', ['$event'])
  // onPopState(event: Event) {
  //   console.log('Back button pressed');
  //   let result = confirm("Changes you made may not be saved.");
  //   if (result) {
  //     //history.back();
  //   } 
  //       event.returnValue = false;
    
  // }
 

  
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
    // const componentFactory = this.compFactoryResolver.resolveComponentFactory(adItem.component);
    const cmpFactory= this.compFactoryResolver.resolveComponentFactory(name);
    // const cmpRef= this.viewContainerRef.createComponent(cmpFactory);
    // let compAndData = new CompType();
    //     compAndData.component = cmpFactory;
    //     compAndData.data = this.data;
    //     this.components.push(compAndData);
    // this.config.compns=this.components;
    this.components.push(cmpFactory);
    // this.components.push( this.viewContainerRef.createComponent(cmpFactory));
    // const adItem = this.ads;
    // cmpRef.instance.data = AdItem;
    //let currentComponent = componentRef.instance;
    //this.components.push(componentRef);
    console.log(this.components);
    // this.config.allComps.push(this.comps);
    // console.log(this.config.allComps)
    // cmpFactory.instance.variableName = 'abc';
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
  {name:MultiSelectComponent,isDisable:false,comp:'Multi Select',icon:'fa fa-list'}, 
  {name:YesNoComponent,isDisable:false,comp:'Yes or No',icon:'fa fa-thumbs-up'}, 
  {name:MatrixComponent,isDisable:false,comp:'Matrix',icon:'fa fa-th'},
  {name:RatingScaleComponent,isDisable:false,comp:'Rating',icon:'fa fa-star'},
  {name:RankingComponent,isDisable:false,comp:'Ranking',icon:'fa fa-bar-chart'}, 
  {name:OpenEndedComponent,isDisable:false,comp:'Open Ended',icon:'fa fa-pencil'}, 
  {name:MixedTypeComponent,isDisable:false,comp:'Mixed Type',icon:'fa fa-tasks'},
  {name:ImageChoiceComponent,isDisable:false,comp:'Image Choice',icon:'fa fa-picture-o'}
];
