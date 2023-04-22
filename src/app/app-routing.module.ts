import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { D3Component } from './_components/d3/d3.component';
import { UsersComponent } from './_components/users/users.component';

const routes: Routes = [
  {
    path:'d3',
    component: D3Component
  },
  {
    path:'users',
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
