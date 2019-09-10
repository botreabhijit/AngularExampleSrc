import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AbcTemplateComponent } from './Abc-template/Abc-template.component';

@NgModule({
  declarations: [
    AppComponent,
    AbcTemplateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
