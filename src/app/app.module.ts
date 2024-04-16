import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';
import { SubmitformComponent } from './submitform/submitform.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PhonenumberComponent } from './phonenumber/phonenumber.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListformsComponent } from './listforms/listforms.component';
import { ResponseComponent } from './response/response.component';
// import{MatIconModule} from '@angular/material'
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatButton} from '@angular/material/button'

import { AppService } from './app.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

const Routes: Routes=[
  // {path:'',component:TestlistComponent},
  {path:'getlist',component:ListformsComponent},
  
  {path:'response',component:ResponseComponent}
  ]
@NgModule({
  declarations: [
    AppComponent,
    SubmitformComponent,
    FeedbackComponent,
    PhonenumberComponent,
    ListformsComponent,
    ResponseComponent
    
  ],
  imports: [
    MatButton,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule ,
    MatCardModule,
    RouterModule.forRoot(Routes),
    
    
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
