import { Injectable } from '@angular/core';
import { User } from './custom';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array<User>;
  emptyId: Set<number|string> = new Set();
  usablePushId: number|string;

  constructor() {
    this.users = [];
    for (let index = 0; index < 16; index++) {
      const user: User = {
        id: index,
        push: false
      };
      this.users.push(user);
    }
  }

  addEmptyId(id: number|string) {
    this.emptyId.add(id);
    this.updateUsablePushId();
  }

  deleteEmpltyId(id: number|string) {
    this.emptyId.delete(id);
    this.updateUsablePushId();
  }

  updateUsablePushId() {
    const values = Array.from(this.emptyId);
    if (values.length > 0) {
      this.usablePushId = values[0];
    } else {
      this.usablePushId = 0;
    }
  }
}
