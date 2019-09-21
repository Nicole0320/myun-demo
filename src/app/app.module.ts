import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PusherComponent } from './pusher/pusher.component';
import { PlayerComponent } from './player/player.component';
import { DrawerComponent } from './drawer/drawer.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PusherComponent,
    PlayerComponent,
    DrawerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
