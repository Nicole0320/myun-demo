import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PullService {
  private mrtcUrl = 'mrtc://mrtc.myun.tv/live/rl7mmgml';
  private config: object = {
    height: '300px',
    width: '400px',
    autoReconnect: true,
    autoplay: true,
    volumn: 0.5
  };
  private overlayElement: HTMLElement;
  private id: string | number;
  puller: any;

  constructor(
    private userService: UserService
  ) {
  }

  private log(message: any, type: string = ''): void {
    if (type === 'error') {
      console.error('[Pull Service]', message);
      return;
    }
    console.log(`[Pull Service]: ${type} `, message);
  }

  private addListener(): void {
    this.puller.on('error', (err: any) => {
      if ('server stream not exist' === err.message) {
        this.userService.addEmptyId(this.id);
      } else {
        this.log(err.message, 'error');
      }
    });
    this.puller.on('stream_ready', (media: any) => {
      console.log('拉流成功', media);
      this.userService.deleteEmpltyId(this.id);
    });
  }

  init(element: HTMLElement, id?: string | number): void {
    this.overlayElement = element;
    this.id = id;
    const url: string = this.id ? `${this.mrtcUrl}_${this.id}` : this.mrtcUrl;
    this.puller = new Mrtc.Player(url, element, this.config);
    this.addListener();
  }

  play(): void {
    this.puller.startPlay();
  }

  stop(): void {
    this.puller.stopPlay();
  }

  // 重置
  reset(element = this.overlayElement): void {
    this.puller = this.init(element);
  }
}
