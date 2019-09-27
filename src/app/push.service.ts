import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PushService {
  private mrtcUrl = 'mrtc://mrtc.myun.tv/live/rl7mmgml';
  private config: object = {
    type: 'camera'
  };
  private overlayElement: HTMLElement;
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
    this.overlayElement = element;
    console.log('init: ', Mrtc);
    this.pusher = new Mrtc.Broadcaster(element);
    this.addListener();
  }

  publish(id?: string): void {
    if (!this.pusher) {
      this.log('push init failed', 'error');
      return;
    }
    const url: string = id ? `${this.mrtcUrl}_${id}` : this.mrtcUrl;
    this.pusher.startPublish(url);
  }

  stop(): void {
    this.pusher.stopPublish();
  }

  closeVideo(close: boolean): void {
    this.pusher.setVideoMute(close);
    this.log(`video is ${close ? 'off' : 'on'}.`);
  }

  mute(mute: boolean): void {
    this.pusher.setMute(mute);
    this.log(`volumn is ${mute ? 'off' : 'on'}.`);
  }

  getStatus(): object {
    return this.pusher.getPublishStats();
  }

  reset(element = this.overlayElement): void {
    this.init(element);
  }

  switchToScreen(screen: boolean): void {
    if (screen) {
      this.pusher.switchToScreen();
    } else {
      this.pusher.switchToCamera();
    }
  }
}
