import { Component, OnInit, ElementRef } from '@angular/core';

const board = window.muduBoard;

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {
  page: 1;

  private wToken = '2895a2c4-3934-4023-8264-6dea9d179df4';
  private rToken = '6296e8b1-eaf6-4182-a4e7-937a197953df';
  private writer: any;
  private reader: any;

  constructor(
    private el: ElementRef
  ) {}

  ngOnInit() {}

  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit() {
    const writerDom = this.el.nativeElement.querySelector('.write');
    const menuDom = this.el.nativeElement.querySelector('.menu');
    const readDom = this.el.nativeElement.querySelector('.read');
    console.log(writerDom, menuDom, readDom);
    this.writer = board.createRWBoard({
      dom: writerDom,
      menuDom,
      token: this.wToken,
      id: 'b1lb765z',
      initPage: this.page
    });

    this.reader = board.createRWBoard({
      dom: readDom,
      mode: board.R_MODE_LISTEN,
      token: this.rToken,
      id: 'b1lb765z',
      initPage: this.page
    });
  }

}
