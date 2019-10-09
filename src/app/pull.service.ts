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
  pullers: Map<number|string, any> = new Map();

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

  private addListener(id: string | number): void {
    this.pullers.get(id).on('error', (err: any) => {
      if ('server stream not exist' === err.message || err.message === 'stream been closed') {
        this.userService.addEmptyId(id);
      } else {
        this.log(err.message, 'error');
      }
    });
    this.pullers.get(id).on('stream_ready', (media: any) => {
      console.log('拉流成功', media);
      this.userService.deleteEmpltyId(id);
    });
  }

  init(element: HTMLElement, id: string | number): void {
    const url: string = id ? `${this.mrtcUrl}_${id}` : this.mrtcUrl;
    const puller = new Mrtc.Player(url, element, this.config);
    this.pullers.set(id, puller);
    this.addListener(id);
  }

  play(id: number|string): void {
    this.pullers.get(id).startPlay();
  }

  stop(id: number|string): void {
    this.pullers.get(id).stopPlay();
  }

  // 重置
  reset(element: HTMLElement, id: number|string): void {
    this.init(element, id);
  }
}
