import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserService } from './users/user.service';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AbcAdminComponent } from './Abc-admin/Abc-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AbcAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
