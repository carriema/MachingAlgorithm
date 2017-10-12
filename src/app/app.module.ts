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

const appRoutes : Route[]= [
  {path:'/users', component: UserlistComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SelectBoxComponent,
    UserlistComponent,
    FormComponent,
    RouterModule.forRoot(appRoutes)
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
