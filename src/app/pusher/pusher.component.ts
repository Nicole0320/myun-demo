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
    this.pushService.init(this.el.nativeElement);
  }

  onClick(): void {
    console.log(this.el.nativeElement);
  }

}
