import { Component } from '@angular/core';
import { UsersService } from './shared/users.service';
import { CounterService } from './shared/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  actionsMsg: string;

  constructor(
    private usersSerivce: UsersService,
    private counterService: CounterService
  ) {
    this.counterService.actionsAdded.subscribe(actionCount => {
      this.actionsMsg = 'Number of actions added: ' + actionCount;
      return undefined;
    });
  }
}
