import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
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

import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { FilterPipe } from './filter.pipe';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    QuestionComponent,
    MultiSelectComponent,
    YesNoComponent,
    MatrixComponent,
    RatingScaleComponent,
    RankingComponent,
    OpenEndedComponent,
    MixedTypeComponent,
    ImageChoiceComponent,
    ThankyouComponent,
    UserComponent,
    HomeComponent,
    // FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    NgxStarRatingModule,
    NgxPaginationModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule { }
