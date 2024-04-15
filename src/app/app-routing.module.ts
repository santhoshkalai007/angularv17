import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmitformComponent } from './submitform/submitform.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PhonenumberComponent } from './phonenumber/phonenumber.component';

const routes: Routes = [
  { path:' ',redirectTo:'create'},
  {path:'create' ,component:SubmitformComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'phonenumber',component:PhonenumberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
