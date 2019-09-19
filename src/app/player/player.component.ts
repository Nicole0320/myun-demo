import { Component, OnInit, ElementRef } from '@angular/core';
import { PullService } from '../pull.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(
    private pullService: PullService,
    private el: ElementRef
  ) { }

  ngOnInit() {}

  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit() {
    this.pullService.init(this.el.nativeElement.querySelector('.player'));
  }

  play(): void {
    this.pullService.play();
  }

  stop(): void {
    this.pullService.stop();
  }

}
