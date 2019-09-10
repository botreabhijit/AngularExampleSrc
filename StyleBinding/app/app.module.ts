import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AbcStyleComponent } from './Abc-style/Abc-style.component';

@NgModule({
  declarations: [
    AppComponent,
    AbcStyleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
