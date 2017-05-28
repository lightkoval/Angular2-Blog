import {Component, OnInit} from "@angular/core";
import {User} from "../user";
import {UsersService} from "../users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user: User = new User();

  constructor(private usersService: UsersService,
              private router: Router) {
  }

  ngOnInit() {

  }

  onSubmit(): void {
    if (this.user.name) {
      this.usersService.create(this.user).then(() => this.router.navigate(['/users']));
    } else {
      this.router.navigate(['/users']);
    }
  }

  gotoUsers(): void {
    this.router.navigate(['/users']);
  }
}
