import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {master_routes} from './app.routes';
import { SginupComponent } from './sginup/sginup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SginupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(master_routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
