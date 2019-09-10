import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AbcClassComponent } from './Abc-class/Abc-class.component';

@NgModule({
  declarations: [
    AppComponent,
    AbcClassComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
