import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { CounterUserService } from './services/counterUser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, CounterUserService]
})
export class AppComponent {

  // activeUsers : string[] = [];
  // inactiveUsers : string[] = [];

  // constructor(private user: UserService) { }

  // ngOnInit() {
  //   this.activeUsers = this.user.activeUsers;
  //   this.inactiveUsers = this.user.inactiveUsers;
  // }  
}
