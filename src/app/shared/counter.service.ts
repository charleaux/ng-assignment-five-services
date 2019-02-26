import { EventEmitter } from '@angular/core';

export class CounterService {
  actionsCount = 0;

  actionsAdded = new EventEmitter<number>();

  addAction() {
    this.actionsCount += 1;
  }
}
