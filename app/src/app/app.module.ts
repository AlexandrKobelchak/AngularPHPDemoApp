import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from "./site/user/user.component";
import { AboutComponent } from './site/about/about.component';
import { HomeComponent } from './site/home/home.component';
import { MailingComponent } from './site/mailing/mailing.component';
import { MenuComponent } from './site/menu/menu.component';
import { UserService } from "./_services/UserService";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    HomeComponent,
    MailingComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: UserService, useClass: UserService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
