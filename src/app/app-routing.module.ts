import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallComponent } from './call/call.component'
import { JournalComponent } from './journal/journal.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "main", component: MainComponent, children:[
    {path: "call", component: CallComponent},
  {path: "journal", component: JournalComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
