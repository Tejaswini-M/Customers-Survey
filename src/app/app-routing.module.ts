import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: "", component : HomeComponent},
  { path: "welcome", component : WelcomeComponent},
  { path: "qns", component : QuestionComponent, children: [
      { path: ':id', component: QuestionComponent }
    ]
  },
  { path: "user/:id", component : UserComponent
  },
  { path: "thank", component : ThankyouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
