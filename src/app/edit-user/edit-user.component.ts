import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {User} from "../user";
import {UsersService} from "../users.service";

@Component({
  moduleId: module.id,
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User;

  constructor(private usersService: UsersService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.usersService.getUser(+params['id']))
      .subscribe(user => this.user = user);
  }

  save(): void {
    this.usersService.update(this.user).then(() => this.router.navigate(['/users']));
  }

  delete(user: User): void {
    this.usersService
      .delete(user.id)
      .then(() => this.router.navigate(['/users']));
  }

  gotoUsers(): void {
    this.router.navigate(['/users']);
  }
}
