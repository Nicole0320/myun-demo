import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PusherComponent } from './pusher/pusher.component';
import { PlayerComponent } from './player/player.component';
import { DrawerComponent } from './drawer/drawer.component';
import { AppRoutingModule } from './app-routing.module';
import { PlayerListComponent } from './player-list/player-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PusherComponent,
    PlayerComponent,
    DrawerComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    PlayerListComponent
  ]
})
export class AppModule { }
