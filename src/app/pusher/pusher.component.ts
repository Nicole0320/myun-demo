import { Component, OnInit, ElementRef } from '@angular/core';
import { PushService } from './../push.service';

@Component({
  selector: 'app-pusher',
  templateUrl: './pusher.component.html',
  styleUrls: ['./pusher.component.css']
})
export class PusherComponent implements OnInit {
  videoClosed = false;
  mute = false;
  status: string;

  private timmer: NodeJS.Timer;

  constructor(
    private pushService: PushService,
    private el: ElementRef
  ) { }

  ngOnInit() {
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit() {
    this.pushService.init(this.el.nativeElement.querySelector('.pusher'));
  }

  publish(): void {
    this.pushService.publish();
    this.timmer = this.logPushStatus();
  }

  stop(): void {
    this.pushService.stop();
    clearInterval(this.timmer);
  }

  toggleVideo(): void {
    this.videoClosed = !this.videoClosed;
    this.pushService.closeVideo(this.videoClosed);
  }

  toggleMute(): void {
    this.mute = !this.mute;
    this.pushService.mute(this.mute);
  }

  private logPushStatus(): NodeJS.Timer {
    const clock = setInterval(() => {
      this.status = JSON.stringify(this.pushService.getStatus());
    }, 3000);
    return clock;
  }
}
