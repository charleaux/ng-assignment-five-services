import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UsersService {
  users = [
    { name: 'Max', status: 'active' },
    { name: 'Anna', status: 'active' },
    { name: 'Chris', status: 'inactive' },
    { name: 'Manu', status: 'inactive' }
  ];
  // activeUsers = ['Max', 'Anna'];
  activeUsers = this.users
    .filter(user => user.status === 'active')
    .map(user => user.name);
  // inactiveUsers = ['Chris', 'Manu'];
  inactiveUsers = this.users
    .filter(user => user.status === 'inactive')
    .map(user => user.name);

  constructor(private counterService: CounterService) {}

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.addAction();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.addAction();
  }
}
