import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListformsComponent } from './listforms/listforms.component';
import { ResponseComponent } from './response/response.component';
import { MatButton} from '@angular/material/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SubmitformComponent } from './submitform/submitform.component';

import { FeedbackComponent } from './feedback/feedback.component';
import { PhonenumberComponent } from './phonenumber/phonenumber.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { CommonModule } from '@angular/common';

import { FlexLayoutServerModule } from '@angular/flex-layout/server';
// const Routes: Routes = [
// {path:'',component:TestlistComponent},
//   { path: 'getlist', component: ListformsComponent },
//   { path: 'response', component: ResponseComponent }
// ]
@NgModule({
  declarations: [
    AppComponent,
    ListformsComponent,
    ResponseComponent,
    SubmitformComponent,
    FeedbackComponent,
    PhonenumberComponent,
  ],
  imports: [
    MatButton,
    BrowserModule,
    AppRoutingModule,
    NgbModule ,

    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
 
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,

    CommonModule,

    FlexLayoutServerModule
  ], 
  exports:[
    MatIconModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule
     
  ],
  providers: [AppService,provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
