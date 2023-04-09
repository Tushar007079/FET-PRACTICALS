import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from'./11/app.component';
import { TodolistComponent } from'./12/app.component';

const routes: Routes = [
 { path: '', redirectTo:'/prac11', pathMatch:'full'},
 { path: '11', component:AppComponent },
 { path: '12', component:TodolistComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }