import { Injectable } from '@angular/core';

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
  puller: any;

  constructor() {
  }

  private log(message: any, type: string = ''): void {
    console.log(`[Push Service]: ${type} `, message);
  }

  private addListener(): void {
    this.puller.on('error', (err: any) => {
      this.log(err, 'error');
    });
    this.puller.on('stream_ready', (media: any) => {
      console.log('拉流成功', media);
    });
  }

  init(element: HTMLElement, id?: string): void {
    const url: string = id ? `${this.mrtcUrl}_${id}` : this.mrtcUrl;
    console.log('init: ', Mrtc);
    this.puller = new Mrtc.Player(url, element, this.config);
    this.addListener();
  }

  play(): void {
    this.puller.startPlay();
  }
}
