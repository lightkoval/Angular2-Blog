import {Component, OnInit} from "@angular/core";
import {User} from "../user";
import {UsersService} from "../users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UsersService],
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private usersService: UsersService,
              private router: Router) {
  }

  getUsers(): void {
    this.usersService.getUsers().then(users => this.users = users);
  }

  ngOnInit() {
    this.getUsers();
  }

  gotoForm(): void {
    this.router.navigate(['/create-user'])
  }

  gotoUsers(): void {
    this.router.navigate(['/users']);
  }
}
