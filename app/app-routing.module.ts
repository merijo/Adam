import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ HouseHoldComponent} from '../app/house-hold/house-hold.component';



const routes: Routes = [
  {path:'HouseHold', component:HouseHoldComponent},
  {path:'', redirectTo:'/HouseHold', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
