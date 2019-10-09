import { Injectable } from '@angular/core';
import { User } from './custom';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array<User>;
  emptyId: Set<number|string> = new Set();

  constructor() {
    this.users = [];
    for (let index = 0; index < 32; index++) {
      const user: User = {
        id: index,
        push: false
      };
      this.users.push(user);
    }
  }

  addEmptyId(id: number|string) {
    this.emptyId.add(id);
  }

  deleteEmpltyId(id: number|string) {
    this.emptyId.delete(id);
  }
}
