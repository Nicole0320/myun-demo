import { Injectable } from '@angular/core';
import { User } from './custom';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array<User>;

  constructor() {
    for (let index = 0; index < 32; index++) {
      const element: User = {
        id: index,
        playing: false
      };
    }
  }
}
