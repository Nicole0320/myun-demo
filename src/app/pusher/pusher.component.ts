import { Component, OnInit, ElementRef } from '@angular/core';
import { PushService } from './../push.service';

@Component({
  selector: 'app-pusher',
  templateUrl: './pusher.component.html',
  styleUrls: ['./pusher.component.css']
})
export class PusherComponent implements OnInit {
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
  }

  stop(): void {
    this.pushService.stop();
  }

}
