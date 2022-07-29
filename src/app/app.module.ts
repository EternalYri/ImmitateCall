import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallComponent } from './call/call.component';
import { JournalComponent } from './journal/journal.component';

import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './shared/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    CallComponent,
    JournalComponent,
    ButtonComponent,
    InputComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
