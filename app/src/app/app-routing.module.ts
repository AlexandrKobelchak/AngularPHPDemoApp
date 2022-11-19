import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./site/home/home.component";
import {AboutComponent} from "./site/about/about.component";
import {MailingComponent} from "./site/mailing/mailing.component";
import {UserComponent} from "./site/user/user.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'mailing', component: MailingComponent},
  {path: 'user', component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
