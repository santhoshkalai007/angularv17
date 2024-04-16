import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmitformComponent } from './submitform/submitform.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PhonenumberComponent } from './phonenumber/phonenumber.component';
import { ListformsComponent } from './listforms/listforms.component';
import { ResponseComponent } from './response/response.component';

const routes: Routes = [
  { path:' ',redirectTo:'create'},
  {path:'create' ,component:SubmitformComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'phonenumber',component:PhonenumberComponent},

  { path: '', component: ListformsComponent },
  { path: 'response/:id', component: ResponseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
