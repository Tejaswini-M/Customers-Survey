import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { MultiSelectComponent } from './dynamic_components/multi-select/multi-select.component';
import { YesNoComponent } from './dynamic_components/yes-no/yes-no.component';
import { MatrixComponent } from './dynamic_components/matrix/matrix.component';
import { RatingScaleComponent } from './dynamic_components/rating-scale/rating-scale.component';
import { RankingComponent } from './dynamic_components/ranking/ranking.component';
import { OpenEndedComponent } from './dynamic_components/open-ended/open-ended.component';
import { MixedTypeComponent } from './dynamic_components/mixed-type/mixed-type.component';
import { ImageChoiceComponent } from './dynamic_components/image-choice/image-choice.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionComponent,
    MultiSelectComponent,
    YesNoComponent,
    MatrixComponent,
    RatingScaleComponent,
    RankingComponent,
    OpenEndedComponent,
    MixedTypeComponent,
    ImageChoiceComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
