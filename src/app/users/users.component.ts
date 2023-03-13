import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  // element slector
  selector: 'app-users',
  // attribute selector
  // selector: '[app-users]',
  // class selector
  // selector: '.app-users',
  // template: '<app-user></app-user> <app-user></app-user>',
  // template: `<app-user></app-user> <app-user></app-user>`,
  templateUrl: './users.component.html',
  // styleUrls: ['./users.component.css'],
  styles: [
    `
      h3 {
        color: red;
      }
    `,
  ],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class UsersComponent implements OnInit {
  allowNewUser: boolean = false;
  // userCreatedStatus: string = 'No user is created';
  userName: string = 'Manju';
  isUserCreated: boolean = false;
  users: string[] = ['user1', 'user2'];
  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    }, 3000);
  }
  ngOnInit(): void {}
  onUserStatusChange() {
    this.isUserCreated = true;
    this.users.push(this.userName);
    // this.userCreatedStatus = 'User is created';
  }
  onUpodateUser(event: Event) {
    // this.userName = (event.target as HTMLInputElement).value;
    this.userName = (<HTMLInputElement>event.target).value;
    // console.log(this.userName);
  }
}
