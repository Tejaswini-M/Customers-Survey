import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: "", component : WelcomeComponent},
  { path: "qns", component : QuestionComponent},
  { path: "user", component : UserComponent, children: [
      { path: ':id', component: UserComponent }
    ]
  },
  { path: "thank", component : ThankyouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
