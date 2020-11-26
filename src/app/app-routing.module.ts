import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketComponent } from './ticket/ticket.component';
import {AppComponent} from './app.component'

const routes: Routes = [
  {
    path: 'destination/:code',
    component: TicketComponent
  },
  {
    path:'',
    component: AppComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
