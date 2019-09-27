import { Component } from '@angular/core';
import { PusherComponent } from './pusher/pusher.component';
import { PlayerComponent } from './player/player.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myun-sdk-demo';
  componentArr = [PusherComponent, PlayerComponent];
  switch(): void {
    this.componentArr = this.componentArr.reverse();
  }
}
