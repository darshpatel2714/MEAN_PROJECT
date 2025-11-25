import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { EditComponent } from './edit/edit.component';
import { PlayersComponent } from '../components/players/players.component';

const routes: Routes = [
  {path:'' , component:PlayersComponent},
  {path:"addplayer" , component:AddplayerComponent},
  {path:"edit/:id" , component:EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRUDRoutingModule { }
