import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallComponent } from './call/call.component';
import { JournalComponent } from './journal/journal.component';
import { LoginComponent } from './login/login.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    CallComponent,
    JournalComponent,
    LoginComponent,
    ButtonComponent,
    InputComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
