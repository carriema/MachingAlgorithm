import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SelectBoxComponent} from "./selectbox/selectbox.component";
import {HttpModule} from "@angular/http";
import { UserlistComponent } from './userlist/userlist.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from "@angular/forms";
import {SelectService} from "./service/service";
import {Route, RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    SelectBoxComponent,
    UserlistComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [SelectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
