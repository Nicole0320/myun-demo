import { Injectable } from '@angular/core';
import { UserService } from './user.service';

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

  constructor(
    private userService: UserService
  ) { }

  private log(message: any, type: string = ''): void {
    if (type === 'error') {
      console.error('[Pull Service]', message);
      return;
    }
    console.log(`[Pull Service]: ${type} `, message);
  }

  private addListener(): void {
    this.pusher.on('error', (err: any) => {
      this.stop();
      this.log(err, 'error');
      if (err.message === 'server stream alread exist') {
        alert('请重试publish');
      }
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

  publish(id: string|number = this.userService.usablePushId): void {
    if (!this.pusher) {
      this.log('push init failed', 'error');
      return;
    }
    const url: string = id ? `${this.mrtcUrl}_${id}` : this.mrtcUrl;
    const publishStatus = this.getStatus();
    if (publishStatus.videoBitrate + publishStatus.audioBitrate > 0) {
      this.stop();
    }
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

  getStatus(): any {
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
