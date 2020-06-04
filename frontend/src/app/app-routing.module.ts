import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//  add
import { Routes, RouterModule } from '@angular/router';
import { CommandsComponent } from './components/commands/commands.component';
import { DetailsCardComponent } from './components/details-card/details-card.component';
import { AddCommandComponent } from './components/add-command/add-command.component';

const routes: Routes = [
  { path: 'commands/all', component: CommandsComponent },
  { path: 'commands/add', component: AddCommandComponent },
  { path: 'commands/:id', component: DetailsCardComponent },
  { path: '', redirectTo: '/commands/all', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
