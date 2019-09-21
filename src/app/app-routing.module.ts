import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { PusherComponent } from './pusher/pusher.component';
import { PlayerComponent } from './player/player.component';
import { DrawerComponent } from './drawer/drawer.component';

const routes: Routes = [
  { path: 'push', component: PusherComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'drawer', component: DrawerComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
