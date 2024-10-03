import { Routes } from '@angular/router';
import {HomeComponent} from "./public/home/home.component";
import {RecordsComponent} from "./marathon/pages/records/records.component";

export const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'records', component: RecordsComponent}



];
