declare namespace Mrtc {
  class Broadcaster {
    constructor(element: HTMLElement, config?: object);
  }
  class Player {
    constructor(mrtc_url: string, videoContainer: HTMLElement, config?: object);
  }
  class MrtcMixer {
    constructor(canvasContainer: HTMLElement, streamParams: object)
  }
}
