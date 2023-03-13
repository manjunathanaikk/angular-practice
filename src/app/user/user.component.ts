import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() user: string = '';
  userId: number = 10;
  userStatus: string = '';
  constructor() {
    this.userStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }
  getUserStatus() {
    return this.userStatus;
  }
  getColor() {
    if (this.userStatus === 'Online') {
      return 'green';
    }
    return 'red';
  }
}
