import { Component } from '@angular/core';
import { PusherComponent } from './pusher/pusher.component';
import { PlayerComponent } from './player/player.component';
import { PlayerListComponent } from './player-list/player-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myun-sdk-demo';
  componentArr = [PusherComponent, PlayerListComponent];
  switch(): void {
    this.componentArr = this.componentArr.reverse();
  }
}
