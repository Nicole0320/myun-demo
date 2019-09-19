import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PushService {
  private mrtcUrl = 'mrtc://mrtc.myun.tv/live/rl7mmgml';
  private config: object = {
    type: 'camera'
  };
  pusher: any;

  constructor() { }

  private log(message: any, type: string = ''): void {
    console.log(`[Push Service]: ${type} `, message);
  }

  private addListener(): void {
    this.pusher.on('error', (err: any) => {
      this.log(err, 'error');
    });
    this.pusher.on('published', () => {
      console.log('推流成功');
    });
  }

  init(element: HTMLElement): void {
    console.log('init: ', Mrtc);
    this.pusher = new Mrtc.Broadcaster(element);
    this.addListener();
  }

  publish(): void {
    if (!this.pusher) {
      this.log('push init failed', 'error');
      return;
    }
    this.pusher.startPublish(this.mrtcUrl);
    alert('published');
  }

  stop(): void {
    this.pusher.stopPublish();
  }
}
