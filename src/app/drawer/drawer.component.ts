import { Component, OnInit, ElementRef } from '@angular/core';
import { BrowserDomAdapter } from '@angular/platform-browser/src/browser/browser_adapter';

const board = window.muduBoard;
interface Mode {
  mode: string;
  text: string;
}
const ModeMap = {
  [board.R_MODE_LISTEN]: {
    text: 'listen'
  },
  [board.R_MODE_TIME]: {
    text: 'replay'
  }
};

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {
  page = 1;
  mode = board.R_MODE_LISTEN;
  modeText = ModeMap[this.mode].text;

  private wToken = 'af524cae-e376-4b46-bebd-f3d9ed97bd9f';
  private rToken = '72fd0cb9-14cb-4714-8069-59ae5e771068';
  private id = '7d5z1o0n';
  private writer: any;
  private reader: any;

  constructor(
    private el: ElementRef
  ) {}

  ngOnInit() {}

  private createDrawer(): void {
    const writerDom = this.el.nativeElement.querySelector('.write');
    const menuDom = this.el.nativeElement.querySelector('.menu');
    this.writer = board.createRWBoard({
      dom: writerDom,
      menuDom,
      token: this.wToken,
      id: this.id,
      initPage: this.page
    });
  }

  private createReadBoard(mode: string): void {
    const readDom = this.el.nativeElement.querySelector('.read');
    this.reader = board.createRBoard({
      dom: readDom,
      mode,
      token: this.rToken,
      id: this.id,
      initPage: this.page
    });
  }

  private createListenBoard(): void {
    this.mode = board.R_MODE_LISTEN;
    this.createReadBoard(this.mode);
    this.reader.listen();
    this.reader.setDelay(2000);
  }

  private createReplayBoard(): void {
    this.mode = board.R_MODE_TIME;
    this.createReadBoard(this.mode);
    this.reader.setNowTime(new Date().getTime() - 5000);
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit() {
    this.createDrawer();
    this.createListenBoard();
  }

  nextPage(): void {
    this.page ++;
    this.writer.setCurrentPage(this.page);
  }

  prevPage(): void {
    if (this.page <= 1) {
      alert('This is first page now');
      return;
    }
    this.page --;
    this.writer.setCurrentPage(this.page);
  }

  switchMode(): void {
    this.reader.destroy();
    if (this.mode === board.R_MODE_LISTEN) {
      this.mode = board.R_MODE_TIME;
      this.createReplayBoard();
    } else {
      this.mode = board.R_MODE_LISTEN;
      this.createListenBoard();
    }
    this.modeText = ModeMap[this.mode].text;
  }

}
