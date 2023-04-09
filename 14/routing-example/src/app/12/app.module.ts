import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { TodolistComponent } from './app.component';

@NgModule({
  declarations: [
    TodolistComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [TodolistComponent]
})
export class AppModule { }
