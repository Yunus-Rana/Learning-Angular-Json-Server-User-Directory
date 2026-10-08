import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { User, UsersResponse } from '../../services/user-data-types';

@Component({
  imports: [],
  selector: 'app-user-list',
  styleUrl: './user-list.css',
  templateUrl: './user-list.html',
})
export class UserList {

  usersData = signal<User[] | UsersResponse | undefined>(undefined);

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.usersData.set(data);
    });
  }
}
