import { LoginComponent } from './login/login.component';
import {Routes} from '@angular/router';
import {SginupComponent} from './sginup/sginup.component';


export const master_routes:Routes=[
{path:'login',component:LoginComponent},
{path:'signUp',component:SginupComponent}
];
