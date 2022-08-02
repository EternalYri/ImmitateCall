import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

import { LoginComponent } from "./login.component";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { AuthGuard } from "../shared/auth.guard";

@NgModule({
  imports: [ReactiveFormsModule, RouterModule, BrowserModule,
  FormsModule],
  declarations: [LoginComponent],
  providers: [AuthGuard]
})

export class LoginModule{}
