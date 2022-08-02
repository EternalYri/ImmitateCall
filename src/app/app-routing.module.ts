import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallComponent } from './call/call.component'
import { JournalComponent } from './journal/journal.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "main", component: MainComponent, canActivate: [AuthGuard], children:[
    {path: "call", component: CallComponent, canActivate: [AuthGuard]},
  {path: "journal", component: JournalComponent, canActivate: [AuthGuard]},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
