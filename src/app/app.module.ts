import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListformsComponent } from './listforms/listforms.component';
import { ResponseComponent } from './response/response.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { FlexLayoutServerModule } from '@angular/flex-layout/server';
const Routes: Routes=[
  // {path:'',component:TestlistComponent},
  {path:'getlist',component:ListformsComponent},
  
  {path:'response',component:ResponseComponent}
  ]
@NgModule({
  declarations: [
    AppComponent,
    ListformsComponent,
    ResponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,

    HttpClientModule,
    RouterModule.forRoot(Routes),
    ReactiveFormsModule,
    FormsModule,

    CommonModule,

    FlexLayoutServerModule
  ],
  providers: [AppService,provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
