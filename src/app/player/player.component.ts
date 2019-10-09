import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { PullService } from '../pull.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() userId: number;

  constructor(
    private pullService: PullService,
    private el: ElementRef
  ) { }

  ngOnInit() {}

  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit() {
    this.pullService.init(this.el.nativeElement.querySelector('.player'), this.userId);
  }

  play(): void {
    this.pullService.play(this.userId);
  }

  stop(): void {
    this.pullService.stop(this.userId);
  }

  retset(): void {
    this.pullService.reset(this.el.nativeElement.querySelector('.player'), this.userId);
  }
}
